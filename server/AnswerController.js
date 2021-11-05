import express from 'express';
import pool from './pool.js';

const AnswerController = express.Router();

AnswerController.post('/postanswer', (req, res) => {
    const {description, questionid} = req.body;
    const {token} = req.cookies;
    console.log(req);
    pool.select('userid').from('users').where({token}).first().then(user => {
        if (user && user.userid) {
            console.log('here' + description);
            pool('answers').insert({
                description, userid: user.userid, questionid
            }).then(qInfo => {
                res.json(qInfo).sendStatus(200);
            }).catch(() => res.sendStatus(403));
        } else {
            res.sendStatus(404);
        }
    })

})
AnswerController.get('/answers/:questionid', (req, res) => {

    const questionid = req.params.questionid;
    pool.select('answers.*', pool.raw('users.email')).from('answers').join('users', 'users.userid', '=', 'answers.userid').where({'answers.questionid': questionid}).orderBy('bestanswer', 'DESC').then(info => {
            res.json(info).sendStatus(200);

        }
    ).catch(() => res.sendStatus(403));

})

AnswerController.put('/bestanswer/:questionid/:answerid', (req, res) => {

    const questionid = req.params.questionid;
    const answerid = req.params.answerid;


    pool('answers').where({'answers.questionid': questionid}).update({bestanswer: '0'}).then(info => {

            res.json(info).sendStatus(200);

        }
    ).catch(() => res.sendStatus(403));

    pool('answers').where({'answers.questionid': questionid, 'answers.answerid': answerid}).update({bestanswer: '1'}).then(info => {

            res.json(info).sendStatus(200);

        }
    ).catch(() => res.sendStatus(403));

})


AnswerController.put('/removebestanswer/:questionid/:answerid', (req, res) => {

    const questionid = req.params.questionid;
    const answerid = req.params.answerid;


    pool('answers').where({'answers.questionid': questionid, 'answers.answerid': answerid}).update({bestanswer: '0'}).then(info => {

            res.json(info).sendStatus(200);

        }
    ).catch(() => res.sendStatus(403));

})
export default AnswerController;