import express from "express";
import pool from "./pool.js";
import {getLoggedInUser} from "./UserFunctions.js";

const CommentController = express.Router();

CommentController.post("/postcomment", (req, res) => {
    const { content, postid, type } = req.body;
    const { token } = req.cookies;
    if (token){
        pool
            .select("userid")
            .from("users")
            .where({ token })
            .first()
            .then((user) => {

                if (user && user.userid) {
                    pool("comments")
                        .insert({
                            content,
                            userid: user.userid,
                            postid,
                            type
                        })
                        .then((qInfo) => {
                            res.json(qInfo);
                        })
                        .catch(() => res.sendStatus(403));
                } else {
                    res.sendStatus(404);
                }
            });} else {
        res.sendStatus(404);
    }
});
CommentController.get("/comments/:questionid", (req, res) => {
    const questionid = req.params.questionid;
    const {token} = req.cookies;
    const type = 'question';
    if (token) {
        getLoggedInUser(token).then(user => {	pool
            .select("comments.*", pool.raw("users.email"), pool.raw('sum(votes.vote) as total'), 'uservote.vote as uservote' )
            .from("comments")
            .join("users", "users.userid", "=", "comments.userid").leftJoin('votes', function() {this.on('votes.qaid', 'comments.id')
                this.andOnVal('votes.qatype', '=', 'comment')
            }).leftJoin(pool.raw('votes uservote on uservote.qaid = comments.id and uservote.qatype = ' + pool.raw('?', ['comment']) + ' and uservote.userid =' + user.userid))
            .where({ "comments.postid": questionid }).groupBy("comments.id").orWhere({"comments.type": 'answer'})

            .then((info) => {

                res.json(info);



            })
            .catch(err => console.log(err));})} else {
        pool
            .select("comments.*", pool.raw("users.email"), pool.raw('sum(votes.vote) as total') )
            .from("comments")
            .join("users", "users.userid", "=", "comments.id").leftJoin('votes', function() {this.on('votes.qaid', 'comments.id')
            this.andOnVal('votes.qatype', '=', 'comment')
        }).where({ "comments.postid": questionid }).groupBy("comments.id")

            .then((info) => {

                res.json(info);



            })
            .catch(err => console.log(err))

    }

});

// CommentController.put("/bestanswer/:questionid/:answerid", (req, res) => {
//     const questionid = req.params.questionid;
//     const answerid = req.params.answerid;

//     pool("answers")
//         .where({ "answers.questionid": questionid })
//         .update({ bestanswer: "0" })
//         .then((info) => {
//             res.json(info);
//         })
//         .catch(() => res.sendStatus(403));

//     pool("answers")
//         .where({ "answers.questionid": questionid, "answers.answerid": answerid })
//         .update({ bestanswer: "1" })
//         .then((info) => {
//             res.json(info);
//         })
//         .catch(() => res.sendStatus(403));
// });

// CommentController.put("/removebestanswer/:questionid/:answerid", (req, res) => {
//     const questionid = req.params.questionid;
//     const answerid = req.params.answerid;

//     pool("answers")
//         .where({ "answers.questionid": questionid, "answers.answerid": answerid })
//         .update({ bestanswer: "0" })
//         .then((info) => {
//             res.json(info);
//         })
//         .catch(() => res.sendStatus(403));
// });
export default CommentController;
