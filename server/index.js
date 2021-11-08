import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserController from "./UserController.js";
import QuestionController from "./QuestionController.js";
import AnswerController from "./AnswerController.js";
import VotingController from "./VotingController.js";
const app = express();
const port = 3030;

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(cookieParser());

app.get("/", function (req, res) {
	res.send("test1");
});

app.use(QuestionController);
app.use(UserController);
app.use(AnswerController);
app.use(VotingController);

app.listen(port, function () {
	console.log("listening on port: " + port);
});
