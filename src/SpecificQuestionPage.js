import axios from "axios";
import Header1 from "./Header1";
import styled from "styled-components";
import { useState, useEffect } from 'react'
import DarkCyanButton from './DarkCyanButton'
import VotingComponent from './VotingComponent'
import VotingArrows from "./VotingArrows";
import TopQuestionsHeader from "./Header1";
import { config } from "@fortawesome/fontawesome-svg-core";

const Box = styled.div `
  padding: 40px 20px;
  display: flex;
  flex-direction: column`
const titlee = styled.div `
  padding-bottom: 40px;`
const QuestionBodyTextArea = styled.textarea `
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

const CheckBestAnswer = styled.div `
  display: inline-block;
  transform: rotate(45deg);
  height: 25px;
  width: 12px;
  margin-left: 30%;
  border-bottom: 7px solid ${props => props.valid ? 'lightgreen' : 'lightgrey'};
  border-right: 7px solid  ${props => props.valid ? 'lightgreen' : 'lightgrey'};
  cursor:${props => props.disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'pointer'};
  `


function SpecificQuestionPage(props) {
    const [specificQuestion, setSpecificQuestion] = useState(false);
    const [voteCount, setVoteCount] = useState(0);
    const AnswerHeader = styled.h2 `font-size: 1.5rem;
      color: black;`
    const [answers, setAnswers] = useState([]);
    const [theAnswer, setTheAnswer] = useState('');
    console.log(specificQuestion);
    const questionid = props.match.params.questionid;
    const [info, setInfo] = useState(false);
    const [user, setUser] = useState('');

    function getQuestion() {
        axios.get('http://localhost:3030/question/' + questionid).then(res => {
            setInfo(res.data);
            setSpecificQuestion(res.data);

        });
    }

    console.log(answers);

    function postAnswer(ev) {
        ev.preventDefault();
        // const data = {description: theAnswer, questionid: specificQuestion.questionid }
        axios.post('http://localhost:3030/postanswer', {
            description: theAnswer,
            questionid: specificQuestion.questionid
        }, { withCredentials: true }).then(res => {

            setTheAnswer('');
            window.location.reload();

        })
    }


    function getQuestion() {
        axios.get('http://localhost:3030/question/' + questionid).then(res => {
            setInfo(res.data);
            setSpecificQuestion(res.data);
            setVoteCount(res.data.question.vote_count)
        });
    }

    console.log('length is ' + answers);

    function getAnswers() {
        axios.get('http://localhost:3030/answers/' + questionid, { withCredentials: true }).then(res => {
            setAnswers(res.data);
        });
    }



    function getUser() {
        axios.get('http://localhost:3030/user', { withCredentials: true })
            .then(response => {
                console.log('here')
                console.log(response.data.userid)
                setUser(response.data.userid);
                console.log('here again')

            })
            .catch(() => {
                setUser(null);
            })
    }

    function selectBestAnswer(answerid, bestanswer) {
        if (bestanswer === 1) {
            axios.put('http://localhost:3030/removebestanswer/' + questionid + '/' + answerid, { withCredentials: true })
                .then(response => {

                    window.location.reload();
                })
                .catch(() => {
                    console.log('some error happened');
                })
        } else {
            axios.put('http://localhost:3030/bestanswer/' + questionid + '/' + answerid, { withCredentials: true })
                .then(response => {

                    window.location.reload();
                })
                .catch(() => {
                    console.log('some error happened');
                })
        }
    }

    function handleOnUpArrowClick() {
        axios.post('http://localhost:3030/vote/up/' + questionid, { withCredentials: true })
        .then(response => setVoteCount(response.data))
    }


    function handleOnDownArrowClick() {
        axios.post('http://localhost:3030/vote/down/' + questionid, { withCredentials: true })
            .then(response => setVoteCount(response.data))
    }


    //disabled = {specificQuestion.userid = user.userid}


    useEffect(() => {
        getQuestion();
        getAnswers();
        getUser();
    }, []);

    return ( <>

        <Box>
        <div> <Header1> { info && info.title } </Header1></div>
        <hr style = {
            { borderColor: 'lightgrey', width: '-webkit-fill-available' }} > </hr> <div style = {
            { display: 'flex', justifyContent: 'space-between' }} > <div style = {
            { color: 'black', display: 'flex' }} >
        <VotingArrows style = {{ marginTop: '10px' }}
        value = { voteCount }
        vote = { 1 }
        onUpArrowClick = {
            () => handleOnUpArrowClick()
        }
        onDownArrowClick = {
            () => handleOnDownArrowClick()
        }
        /> <div > < div children = { info.description }
        style = {
            { color: 'black', padding: "15px 40px" }
        } > </div>  </div >

        </div>

        <span style = {
            { alignSelf: 'flex-end', color: 'black' }
        }
        children = { specificQuestion.email } > asked by { specificQuestion.email } </span> </div>


        <Header1 style = {{ margin: '20px 0px' }} > Answers </Header1> {
        answers && answers.length > 0 && answers.map(a => ( < >

            <hr style = {
                { borderColor: 'lightgrey', width: '-webkit-fill-available' }} > </hr> 
                <div style = {{ display: 'flex', justifyContent: 'space-between' }}> 
                <div style = {
                { color: 'black', display: 'flex' }}> 
                <div> 
                <VotingComponent value = { 1 }
                                 vote = { 1 } >
                </VotingComponent> 
            <CheckBestAnswer valid = { a.bestanswer === 1 }
                             disabled = { specificQuestion.userid !== user }
                             onClick = { () => selectBestAnswer(a.answerid, a.bestanswer)} > 
            </CheckBestAnswer> </div >
            <div children = { a.description }
            style = {
                { color: 'black', padding: "15px 40px" }} > </div>

            </div>

            <span style = {
                { alignSelf: 'flex-end', color: 'black' }
            }
            children = { a.email } > asked by { a.email } </span> </div >

            </>
        ))
    }


    <hr style = {
        { borderColor: 'lightgrey', width: '-webkit-fill-available' }}> </hr>


    <AnswerHeader style = {
        { margin: '10px 0px 10px' }
    } > Your answer </AnswerHeader>

    <
    QuestionBodyTextArea value = { theAnswer }
    onChange = { ev => setTheAnswer(ev.target.value) }
    placeholder = "Please type in your answer in detail." / >
        <DarkCyanButton style = {{ width: 'fit-content' }}
                        type = { 'submit' }
                        onClick = { ev => postAnswer(ev) } > Post answer </DarkCyanButton> 
    </Box> 
    </>
);
}


export default SpecificQuestionPage;