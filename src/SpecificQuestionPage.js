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

const Comments = styled.div`
color:black;
	border-top: lightgrey 1px solid;
	font-size:13px;
	padding:10px;
	margin-left:90px;
	margin-top:10px;
	display:flex;
	justify-content:space-between

	
`


function checkBoxChecked(param) {
	return param
};


function SpecificQuestionPage(props) {

	const [specificQuestion, setSpecificQuestion] = useState(false);
	const [render, setRender] = useState([]);
	const AnswerHeader = styled.h2`
		font-size: 1.5rem;
		color: black;
	`;
	const [answers, setAnswers] = useState([]);
	const [comments, setComments] = useState([]);
	const [theAnswer, setTheAnswer] = useState("");
	const [theComment, setTheComment] = useState("");
	const questionid = 0;
	if (props.match){
		questionid = props.match.params.questionid;
	}
	
	const [info, setInfo] = useState(false);
	const [user, setUser] = useState("");
	const [notLoggedIn, setnotLoggedIn] = useState(false);
	const [userVote, setUserVote] = useState(0);
	const [voteCount, setVoteCount] = useState(0);
//test these fucntions below
	function handleOnUpvote(type, answerid = -1) {
	if (answerid === -1 && type !== 'comment'){	setUserVote(userVote === 1 ? 0 : 1);
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
			
			.then((res) => {window.location.reload();
			checkBoxChecked(true);}
			);
	}
	}

	function handleOnDownvote(type, answerid = -1) {
		if (answerid === -1 && type !== 'comment'){	setUserVote(userVote === -1 ? 0 : -1);
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


// checkbox return true on then, false on catch, if this one doesn't work ignore
	function postAnswer(ev) {
		ev.preventDefault();
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
			}).catch(() => setnotLoggedIn(true));

	}

	//same here
	function postComment(ev, answerid = -1) {

		ev.preventDefault();

		if (answerid < -1){
			return 1;
		}else{

		if (answerid === -1) {
			axios
				.post(
					"http://localhost:3030/postcomment",
					{
						content: theComment,
						postid: specificQuestion[0].questionid,
						type: "question"
					},
					{withCredentials: true}
				)
				.then((res) => {
					setTheComment("");
					window.location.reload();
				}).catch(() => setnotLoggedIn(true));
		} else {
			axios
				.post(
					"http://localhost:3030/postcomment",
					{
						content: document.getElementById(answerid).value,
						postid: answerid,
						type: "answer"
					},
					{withCredentials: true}
				)
				.then((res) => {
					setTheComment("");
					window.location.reload();
				}).catch(() => setnotLoggedIn(true));
		}
	return 0;
	}
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
	function getComments() {
		axios
			.get("http://localhost:3030/comments/" + questionid, {
				withCredentials: true,
			})
			.then((res) => {

				setComments(res.data);
				console.log(comments);
				console.log('above');
				console.log(comments.filter((comments, index ) => comments.postid === 24));
				console.log('kik')
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
				//	window.location.reload();
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


	useEffect(() => {
		getQuestion();
		getAnswers();
		getUser();
		getComments();
	}, []);
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
						 style = {{ cursor: !user && 'not-allowed'}}
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
						asked by {" "}
						<span style={{ color: "#f48024" }}>{specificQuestion[0] && specificQuestion[0].email}  </span>
					</span>
				</div>



				{comments && comments.length > 0 && comments.filter((a,index) => comments[index].type === 'question' ).map((a, newindex) => (	<Comments>	<span style = {{display: "inline-flex"}}><VotingArrows
					size = {"small"}
					style = {{ cursor: !user && 'not-allowed'}}
					total={a.total === null ? 0 : a.total} userVote={a.uservote} disabled = {!user}
					onUpvote={() => handleOnUpvote('comment', a.id)}
					onDownvote={() => handleOnDownvote('comment', a.id)}>
					{" "}
				</VotingArrows><span style = {{width:"95%"}}>{a.content}</span> </span>
					<span
						style={{ alignSelf: "flex-end", color: "black", minWidth:"max-content"}}
						children={comments.email}>
						 commented by {" "}
						<span style={{ color: "#f48024" }}>{a && a.email}  </span></span>

				</Comments> ))}














				<Comments style = {{display:"block"}}>
					<QuestionBodyTextArea
						style = {{minHeight:'0'}}
						value={theComment}
						onChange={(ev) => setTheComment(ev.target.value)}
						placeholder="Please type in your comment."
					/>
					<DarkCyanButton
						style={{ width: "fit-content" }}
						type={"submit"}
						onClick={(ev) => postComment(ev)}disabled = {!user}>

						Post comment
					</DarkCyanButton>
				</Comments>

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
										<VotingArrows total={a.total === null ? 0 : a.total} userVote={a.uservote} disabled = {!user} style = {{ cursor: !user && 'not-allowed'}}
													  onUpvote={() => handleOnUpvote('answer', a.answerid)}
														  onDownvote={() => handleOnDownvote('answer', a.answerid)}
										>{a.total}</VotingArrows>
										<CheckBestAnswer
											valid={a.bestanswer === 1}
											disabled={specificQuestion[0] && (specificQuestion[0].userid !== user)}
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
							{comments && comments.length > 0 && comments.filter(function (e) {
								return e.postid === a.answerid && e.type === 'answer';
							}).map((comment, newindex) => (<>	<Comments>	<span style = {{display: "inline-flex"}}><VotingArrows
								size = {"small"}

								total={comment.total === null ? 0 : comment.total} userVote={comment.uservote} disabled = {!user}
								onUpvote={() => handleOnUpvote('comment', comment.id)}
								onDownvote={() => handleOnDownvote('comment', comment.id)}>
					{" "}
				</VotingArrows><span style = {{width:"95%"}}>{comment.content}</span> </span>
								<span
									style={{ alignSelf: "flex-end", color: "black", minWidth:"max-content"}}
									children={comment.email}>
						 commented by {" "}
									<span style={{ color: "#f48024" }}>{comment && comment.email}  </span></span>

							</Comments>

								</>
							))}
							<Comments style = {{display:"block"}}>
								<form><QuestionBodyTextArea
									style = {{minHeight:'0'}}
									placeholder="Please type in your comment."
									id = {a.answerid}
								/>
									<DarkCyanButton
										style={{ width: "fit-content" }}
										type={"submit"}
										onClick={(ev) => postComment(ev, a.answerid)}>
										Post comment
									</DarkCyanButton>
								</form>
							</Comments>

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
					onClick={(ev) => postAnswer(ev)} disabled = {!user}>
					Post answer
				</DarkCyanButton>

				{!!notLoggedIn && (
					<div style={{ color: "red", paddingTop: 12 + "px" }}>
						{" "}
						Please log in first
					</div>
				)}
			</Box>
		</>
	);
}

export default SpecificQuestionPage;
