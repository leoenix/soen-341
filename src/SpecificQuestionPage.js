import React from "react";
import axios from "axios";
import Header1 from "./Header1";
import styled from "styled-components";
import { useState, useEffect } from "react";
import DarkCyanButton from "./DarkCyanButton";
import VotingArrows from "./VotingArrows";
import TopQuestionsHeader from "./Header1";

const Box = styled.div`
	padding: 40px 20px;
	display: flex;
	flex-direction: column;
`;
const QuestionTitle = styled.div`
	padding-bottom: 40px;
`;
const QuestionBodyTextArea = styled.textarea`
	background: none;
	border: 1px solid #aaa;
	border-radius: 3px;
	display: block;
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
	min-height: 200px;
	margin-bottom: 20px;
`;

const CheckBestAnswer = styled.div`
	display: inline-block;
	transform: rotate(45deg);
	height: 25px;
	width: 12px;
	margin-left: 30%;
	border-bottom: 7px solid ${(props) => (props.valid ? "#008000" : "lightgrey")};
	border-right: 7px solid ${(props) => (props.valid ? "#008000" : "lightgrey")};
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	pointer-events: ${(props) => (props.disabled ? "none" : "pointer")};
`;

function SpecificQuestionPage(props) {
	const [specificQuestion, setSpecificQuestion] = useState(false);
	const [render, setRender] = useState([]);
	const AnswerHeader = styled.h2`
		font-size: 1.5rem;
		color: black;
	`;
	const [answers, setAnswers] = useState([]);
	const [theAnswer, setTheAnswer] = useState("");
	console.log(specificQuestion);
	const questionid = props.match.params.questionid;
	const [info, setInfo] = useState(false);
	const [user, setUser] = useState("");

	const [userVote, setUserVote] = useState(0);
	const [voteCount, setVoteCount] = useState(0);

	function handleOnUpvote(type, answerid = -1) {
	if (answerid === -1){	setUserVote(userVote === 1 ? 0 : 1);
		axios
			.post(
				"http://localhost:3030/vote/up/" + specificQuestion[0].questionid + "/" + type,
				{},
				{ withCredentials: true }
			)
			.then((res) => setVoteCount(res.data));} else {
		axios
			.post(
				"http://localhost:3030/vote/up/" + answerid + "/" + type,
				{},
				{ withCredentials: true }
			)
			.then((res) => window.location.reload());
	}
	}

	function handleOnDownvote(type, answerid = -1) {
		if (answerid === -1){	setUserVote(userVote === -1 ? 0 : -1);
			axios
				.post(
					"http://localhost:3030/vote/down/" + specificQuestion[0].questionid + "/" + type,
					{},
					{ withCredentials: true }
				)
				.then((res) => {setVoteCount(res.data); 		});} else {

			axios
				.post(
					"http://localhost:3030/vote/down/" + answerid + "/" + type,
					{},
					{ withCredentials: true }
				)
				.then((res) => window.location.reload())
		}


	}



	function postAnswer(ev) {
		ev.preventDefault();
		// const data = {description: theAnswer, questionid: specificQuestion.questionid }
		axios
			.post(
				"http://localhost:3030/postanswer",
				{
					description: theAnswer,
					questionid: specificQuestion[0].questionid,
				},
				{ withCredentials: true }
			)
			.then((res) => {
				setTheAnswer("");
				window.location.reload();
			});
	}

	function getQuestion() {
		axios.get("http://localhost:3030/question/" + questionid, {withCredentials: true}).then((res) => {

			setInfo(res.data);
			setSpecificQuestion(res.data);
			if (res.data[0].total){
			setVoteCount(res.data[0].total === null ? 0 : res.data[0].total);
			setUserVote(res.data[0].uservote)
				}
		});
	}

	function getAnswers() {
		axios
			.get("http://localhost:3030/answers/" + questionid, {
				withCredentials: true,
			})
			.then((res) => {

				setAnswers(res.data);
			});
	}

	function getUser() {
		axios
			.get("http://localhost:3030/user", { withCredentials: true })
			.then((response) => {


				setUser(response.data.userid);

			})
			.catch(() => {
				setUser(null);
			});
	}

	function selectBestAnswer(answerid, bestanswer) {
		if (bestanswer === 1) {
			axios
				.put(
					"http://localhost:3030/removebestanswer/" +
						questionid +
						"/" +
						answerid,
					{ withCredentials: true }
				)
				.then((response) => {
					window.location.reload();
				})
				.catch(() => {
					console.log("some error happened");
				});
		} else {
			axios
				.put(
					"http://localhost:3030/bestanswer/" + questionid + "/" + answerid,
					{ withCredentials: true }
				)
				.then((response) => {
					window.location.reload();
				})
				.catch(() => {
					console.log("some error happened");
				});
		}
	}

	//disabled = {specificQuestion.userid = user.userid}

	useEffect(() => {
		getQuestion();
		getAnswers();
		getUser();
	}, []);
	console.log('the user')
	console.log(!!user);
	return (
		<>
			<Box>
				<div>
					<Header1
						style={{
							paddingBottom: "10px",
							marginBottom: "10px",
							fontWeight: "bold",
						}}>
					{specificQuestion[0] && specificQuestion[0].title}
					</Header1>
				</div>
				<hr
					style={{
						borderColor: "lightgrey",
						width: "-webkit-fill-available",
					}}></hr>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ color: "black", display: "flex" }}>
						{" "}
						<VotingArrows
							disabled = {!user}
							total={voteCount}
							userVote={userVote}
							onUpvote={() => handleOnUpvote('question')}
							onDownvote={() => handleOnDownvote('question')}>
							{" "}
						</VotingArrows>
						<div>
							<div

								style={{ color: "black", padding: "15px 40px" }}>{specificQuestion[0] && specificQuestion[0].description}</div>{" "}
						</div>
					</div>

					<span
						style={{ alignSelf: "flex-end", color: "black" }}
						children={specificQuestion.email}>
						asked by {specificQuestion.email}{" "}{specificQuestion[0] && specificQuestion[0].email}
						<span style={{ color: "#f48024" }}>  </span>{" "}
					</span>
				</div>

				<Header1 style={{ margin: "30px 0px 10px 0px", padding: "10px 0" }}>
					Answers{" "}
				</Header1>
				{answers &&
					answers.length > 0 &&
					answers.map((a, index) => (
						<>
							<hr
								style={{
									borderColor: "lightgrey",
									width: "-webkit-fill-available",
								}}></hr>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<div style={{ color: "black", display: "flex" }}>
									{" "}
									<div>
										{" "}
										<VotingArrows total={a.total === null ? 0 : a.total} userVote={a.uservote} disabled = {!user}
													  onUpvote={() => handleOnUpvote('answer', a.answerid)}
														  onDownvote={() => handleOnDownvote('answer', a.answerid)}
										></VotingArrows>
										<CheckBestAnswer
											valid={a.bestanswer === 1}
											disabled={specificQuestion[0].userid !== user}
											onClick={() =>
												selectBestAnswer(a.answerid, a.bestanswer)
											}></CheckBestAnswer>{" "}
									</div>
									<div
										children={a.description}
										style={{ color: "black", padding: "15px 40px" }}></div>
								</div>

								<span
									style={{
										alignSelf: "flex-end",
										color: "black",
										marginBottom: "35px",
									}}
									children={a.email}>
									{" "}
									answered by{" "}
									<span style={{ color: "#f48024" }}> {a.email} </span>{" "}
								</span>
							</div>
						</>
					))}

				<hr
					style={{
						borderColor: "lightgrey",
						width: "-webkit-fill-available",
					}}></hr>

				<AnswerHeader style={{ margin: "10px 0px 10px" }}>
					Your answer
				</AnswerHeader>

				<QuestionBodyTextArea
					value={theAnswer}
					onChange={(ev) => setTheAnswer(ev.target.value)}
					placeholder="Please type in your answer."
				/>
				<DarkCyanButton
					style={{ width: "fit-content" }}
					type={"submit"}
					onClick={(ev) => postAnswer(ev)}>
					Post answer
				</DarkCyanButton>
			</Box>
		</>
	);
}

export default SpecificQuestionPage;
