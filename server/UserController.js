import jwt from 'jsonwebtoken'
import knex from 'knex'
import express from 'express';
import pool from './pool.js';

const UserController = express.Router();

const secondtoken = 'secondtoken';
UserController.get('/profile', function (req, res) {

    const token = req.cookies.token;

    jwt.verify(token, secondtoken, (err, data) => {

        if (err) {
            res.status(403).send();
        } else {
            res.json(data);
        }

    })
});

UserController.get('/user', function (req, res) {


    const {token} = req.cookies;
    pool.select('userid').from('users').where({token}).first().then(user => {
        res.json(user);
    }).catch(() => res.sendStatus(406));
});

UserController.post('/login', function (req, res) {
    const {email, password} = req.body;

    pool.select('password').where({email}).from('users').first().then(user => {

        user.password === password && jwt.sign(email, secondtoken, (error, token) => {
            if (error) {
                res.status(403).send();

            } else {
                pool('users').where({email}).update({token}).then(() => res.cookie('token', token).send()).catch(
                    () => res.sendStatus(403));

            }
        })

    }).catch(error => {
        res.status(403).send();
    })

});

UserController.post('/signup', ((req, res) => {

    const {email, password} = req.body;
    pool.select('*').from('users').where({email: email}).then(rows => {
        if (rows.length === 0) {
            pool('users').insert({email, password}).then(() => {
                res.status(201).send();
            });
            res.status(201).send();
        } else {
            res.status(403).send(
                'user already signed up'
            );
        }
    });
}));

UserController.post('/logout', ((req, res) => {
    res.clearCookie('token').send();
}));

export default UserController;