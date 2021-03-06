import express, {request} from "express";
import pool from "./pool.js";
import {getLoggedInUser} from "./UserFunctions.js";

const QuestionController = express.Router();
QuestionController.put("/question/:questionid", (req, res) => {

    const questionid = req.params.questionid;
    pool("questions").increment('views').where({"questions.questionid": questionid}).then((info) => {
        res.json(info);
    })
        .catch(err => console.log(err));
})
QuestionController.get("/question/:questionid", (req, res) => {
    const questionid = req.params.questionid;
    const {token} = req.cookies;

    const type = 'question';


    if (token) {
        getLoggedInUser(token).then(user => {

            pool
                .select(
                    "questions.*", 'uservote.vote as uservote', pool.raw('users.email'), pool.raw('sum(votes.vote) as total')
                )
                .from("questions").join('users', 'users.userid', '=', 'questions.userid').leftJoin('votes', function () {
                this.on('votes.qaid', 'questions.questionid')

            }).leftJoin(pool.raw('votes uservote on uservote.qaid = questions.questionid and uservote.userid =' + user.userid))

                .where({
                    "questions.questionid": questionid,
                    "votes.qatype": type
                })
                .then((info) => {
                    if (info[0].questionid === null) {
                        pool.select('questions.*', pool.raw('users.email')).from('questions').join('users', 'users.userid', '=', 'questions.userid').where({questionid}).then(info => {

                                res.json(info);

                            }
                        ).catch(() => res.sendStatus(403));
                    } else {
                        res.json(info);
                    }
                })
                .catch(err => console.log(err));
        })
    } else {
        pool
            .select(
                "questions.*", pool.raw('users.email'), pool.raw('sum(votes.vote) as total')
            )
            .from("questions").join('users', 'users.userid', '=', 'questions.userid').leftJoin('votes', function () {
            this.on('votes.qaid', 'questions.questionid')

        })

            .where({
                "questions.questionid": questionid,
                "votes.qatype": type
            })
            .then((info) => {
                if (info[0].questionid === null) {
                    pool.select('questions.*', pool.raw('users.email')).from('questions').join('users', 'users.userid', '=', 'questions.userid').where({questionid}).then(info => {

                            res.json(info).sendStatus(200);

                        }
                    ).catch(() => res.sendStatus(403));
                } else {
                    res.json(info).sendStatus(200);
                }
            })
            .catch(err => console.log(err));
    }


});

QuestionController.get("/questions", (req, res) => {

    pool
        .select("*", pool.raw('users.email'))
        .from("questions").join('users', 'users.userid', '=', 'questions.userid')
        .orderBy("questionid", "desc")
        .then((allQuestions) => {
            res.json(allQuestions);
        })
        .catch(() => res.sendStatus(403));
});

QuestionController.post("/askquestion", (req, res) => {
    const {title, description} = req.body;
    const {token} = req.cookies;

    if (token) {
        pool
            .select("userid")
            .from("users")
            .where({token})
            .first()
            .then((user) => {
                if (user && user.userid) {

                    pool("questions")
                        .insert({
                            title,
                            description,
                            userid: user.userid,
                        })
                        .then((qInfo) => {
                            res.json(qInfo);
                        })
                        .catch(() => res.sendStatus(403));
                } else {
                    res.sendStatus(404);
                }
            });
    } else {
        res.sendStatus(403);
    }
});

export default QuestionController;
