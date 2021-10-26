import express from 'express';
import pool from './pool.js';
const QuestionController = express.Router();

QuestionController.post('/askquestion', (req, res) => {
    const {title, description} = req.body;
    const {token} = req.cookies;
    console.log(req);
    pool.select('userid').from('users').where({token}).first().then(user => {
        if (user && user.userid){
            console.log('here' + description);
            pool('questions').insert({
                title, description, userid:user.userid,
            }).then(() => {
                res.sendStatus(200);
            }).catch(() => res.sendStatus(403));
        } else {
            res.sendStatus(404);
        }
    })

})

export default QuestionController;