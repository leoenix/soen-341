import express, { request } from "express";
import pool from "./pool.js";
import { getLoggedInUser } from "./UserFunctions.js";

const QuestionController = express.Router();

QuestionController.get("/question/:questionid", (req, res) => {
	const questionid = req.params.questionid;

	getLoggedInUser(req.cookies.token).then((user) => {
		pool
			.select(
				"questions.*",
				pool.raw("votes2.vote as user_vote"),
				pool.raw("users.email"),
				pool.raw("sum(distinct votes.vote) as vote_sum")
			)
			.from("questions")
			.join("users", "users.userid", "=", "questions.userid")
			.leftJoin("votes", "questions.questionid", "=", "votes.questionid")
			.leftJoin(
				pool.raw(
					"votes votes2 on votes2.questionid = questions.questionid and votes2.userid = " +
						userid
				)
			)
			.where({ questionid })
			.groupByRaw("questions.questionid")
			.first()
			.then((info) => {
				res.json(info).sendStatus(200);
			})
			.catch(() => res.sendStatus(403));
	});
});

QuestionController.get("/questions", (req, res) => {
	console.log("here");
	pool
		.select("*")
		.from("questions")
		.orderBy("questionid", "desc")
		.then((allQuestions) => {
			res.json(allQuestions).send();
		})
		.catch(() => res.sendStatus(403));
});

QuestionController.post("/askquestion", (req, res) => {
	const { title, description } = req.body;
	const { token } = req.cookies;
	console.log(req);
	pool
		.select("userid")
		.from("users")
		.where({ token })
		.first()
		.then((user) => {
			if (user && user.userid) {
				console.log("here" + description);
				pool("questions")
					.insert({
						title,
						description,
						userid: user.userid,
					})
					.then((qInfo) => {
						res.json(qInfo).sendStatus(200);
					})
					.catch(() => res.sendStatus(403));
			} else {
				res.sendStatus(404);
			}
		});
});

export default QuestionController;
