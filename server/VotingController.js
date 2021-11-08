import express from "express";
import pool from "./pool.js";
import { getLoggedInUser } from "./UserFunctions.js";

const VotingController = express.Router();

VotingController.post("/vote/:direction/:questionid", (req, res) => {
	const token = req.cookies.token;
	getLoggedInUser(token).then((user) => {
		const questionid = req.params.questionid;
		const direction = req.params.direction === "up" ? 1 : -1;

		pool
			.select("*")
			.from("votes")
			.where({
				questionid: questionid,
				userid: user.id,
			})
			.first()
			.then((vote) => {
				// No vote
				if (!vote) {
					pool("votes")
						.insert({
							questionid: questionid,
							userid: user.id,
							vote: direction,
						})
						.then(() => res.send())
						.catch((e) => console.log(e) && res.status(422).send());
				} else if (direction === vote.vote) {
					// delete vote
					pool("votes")
						.where({ id: vote.id })
						.del()
						.then(() => res.send())
						.catch((e) => console.log(e) && res.status(422).send());
				} else {
					// Update vote
					pool("votes")
						.where({ id: vote.id })
						.update({ vote: direction })
						.then(() => res.send())
						.catch((e) => console.log(e) && res.status(422).send());
				}
			});
	});
});

export default VotingController;
