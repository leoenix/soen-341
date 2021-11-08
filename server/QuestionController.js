import express, { request } from "express";
import pool from "./pool.js";
import { getLoggedInUser } from "./UserFunctions.js";

const QuestionController = express.Router();

QuestionController.get("/question/:questionid", (req, res) => {
	const questionid = req.params.questionid;
	const {token} = req.cookies;

	const type = 'question';
	getLoggedInUser(token).then(user => {

		pool
		.select(
			"questions.*", 'uservote.vote as uservote', pool.raw('users.email'), pool.raw('sum(votes.vote) as total')
		)
		.from("questions").join('users', 'users.userid', '=', 'questions.userid').leftJoin('votes', function() {this.on('votes.qaid', 'questions.questionid')

		}).leftJoin(pool.raw('votes uservote on uservote.qaid = questions.questionid and uservote.userid =' + user.userid))

		.where({ "questions.questionid": questionid,
			"votes.qatype": type
		})
		.then((info) => {
			res.json(info).sendStatus(200);
		})
		.catch(err => console.log(err));})



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
