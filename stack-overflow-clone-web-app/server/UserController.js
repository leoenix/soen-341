import jwt from 'jsonwebtoken';
import express from 'express';

const UserController = express.Router();


const secondtoken = 'secondtoken';
UserController.get('/profile', function(req, res){

    const token = req.cookies.token;

    jwt.verify(token, secondtoken, (err, data) => {

        if(err){
            res.status(403).send();
        } else {
            res.json(data).send();
        }

    })
});

UserController.post('/login', function(req,res){
    const {email,password} = req.body;
    const isLoginOk = email === 'test@example.com' && password === 'test';

    isLoginOk && jwt.sign(email, secondtoken, (err, token) => {
        if(err){
            res.status(403).send();
        }else{
            res.cookie('token', token).send();
        }
    })

    if (!isLoginOk){
        res.status(403).send();
    }

});


export default UserController;