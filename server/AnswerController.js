import express from "express";
import pool from "./pool.js";
import {getLoggedInUser} from "./UserFunctions.js";

const AnswerController = express.Router();

AnswerController.post("/postanswer", (req, res) => {
    const {description, questionid} = req.body;
    const {token} = req.cookies;
    if (token) {
        pool
            .select("userid")
            .from("users")
            .where({token})
            .first()
            .then((user) => {
                if (user && user.userid) {
                    pool("answers")
                        .insert({
                            description,
                            userid: user.userid,
                            questionid,
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
        res.sendStatus(404);
    }
});
AnswerController.get("/answers/:questionid", (req, res) => {
    const questionid = req.params.questionid;
    const {token} = req.cookies;
    const type = 'answer';
    if (token) {
        getLoggedInUser(token).then(user => {
            pool
                .select("answers.*", pool.raw("users.email"), pool.raw('sum(votes.vote) as total'), 'uservote.vote as uservote')
                .from("answers")
                .join("users", "users.userid", "=", "answers.userid").leftJoin('votes', function () {
                this.on('votes.qaid', 'answers.answerid')
                this.andOnVal('votes.qatype', '=', 'answer')
            }).leftJoin(pool.raw('votes uservote on uservote.qaid = answers.answerid and uservote.qatype = ' + pool.raw('?', ['answer']) + ' and uservote.userid =' + user.userid))
                .where({"answers.questionid": questionid}).groupBy("answers.answerid").orderBy("answers.bestanswer", "DESC")

                .then((info) => {

                    res.json(info);


                })
                .catch(err => console.log(err));
        })
    } else {
        pool
            .select("answers.*", pool.raw("users.email"), pool.raw('sum(votes.vote) as total'))
            .from("answers")
            .join("users", "users.userid", "=", "answers.userid").leftJoin('votes', function () {
            this.on('votes.qaid', 'answers.answerid')
            this.andOnVal('votes.qatype', '=', 'answer')
        }).where({"answers.questionid": questionid}).groupBy("answers.answerid")

            .then((info) => {

                res.json(info);


            })
            .catch(err => console.log(err))

    }

});

AnswerController.put("/bestanswer/:questionid/:answerid", (req, res) => {
    const questionid = req.params.questionid;
    const answerid = req.params.answerid;

    pool("answers")
        .where({"answers.questionid": questionid})
        .update({bestanswer: "0"})
        .then((info) => {
            pool("answers")
                .where({"answers.questionid": questionid, "answers.answerid": answerid})
                .update({bestanswer: "1"})
                .then((info) => {

                    res.json(info);
                })

        })


});

AnswerController.put("/removebestanswer/:questionid/:answerid", (req, res) => {
    const questionid = req.params.questionid;
    const answerid = req.params.answerid;

    pool("answers")
        .where({"answers.questionid": questionid, "answers.answerid": answerid})
        .update({bestanswer: "0"})
        .then((info) => {
            res.json(info);
        })
        .catch(() => res.sendStatus(403));
});
export default AnswerController;
