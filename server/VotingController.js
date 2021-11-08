import express from "express";
import pool from "./pool.js";
import { getLoggedInUser } from "./UserFunctions.js";
import { getPostTotal } from "./VotingFunctions.js";

const VotingController = express.Router();

VotingController.post("/vote/:direction/:questionid", (req, res) => {
	const token = req.cookies.token;
	getLoggedInUser(token).then((user) => {
		const questionid = req.params.questionid;
		const direction = req.params.direction === "up" ? 1 : -1;

		pool
			.select("votes.*")
			.from("votes")
			.where({
				"votes.questionid": questionid,
				"votes.userid": user.id,
			})
			.first()
			.then((vote) => {
				console.log(vote);
				// No vote
				if (!vote) {
					return pool("votes")
						.insert({
							"votes.questionid": questionid,
							"votes.userid": user.id,
							"votes.vote": direction,
						})
						.then(() =>
							getPostTotal(questionid)
								.then((count) => res.json(count).sendStatus(200))
								.catch((e) => console.log(e.res) && res.status(422).send())
						)
						.catch((e) => console.log(e.res) && res.status(422).send());
				} else if (direction === vote.vote) {
					console.log("here");
					// delete vote
					return pool("votes")
						.where({ "votes.id": vote.id })
						.del()
						.then(() =>
							getPostTotal(questionid)
								.then((count) => res.json(count).sendStatus(200))
								.catch((e) => console.log(e.res) && res.status(422).send())
						)
						.catch((e) => console.log(e.res) && res.status(422).send());
				} else {
					// Update vote
					console.log("here again");
					return pool("votes")
						.where({ "votes.id": vote.id })
						.update({ vote: direction })
						.then(() =>
							getPostTotal(questionid)
								.then((count) => res.json(count).sendStatus(200))
								.catch((e) => console.log(e.res) && res.status(422).send())
						)
						.catch((e) => console.log(e.res) && res.status(422).send());
				}
			}) //if it fails
			.catch((e) => {
				console.log(e.res);
				res.status(422).send();
			});
	});
});

export default VotingController;
