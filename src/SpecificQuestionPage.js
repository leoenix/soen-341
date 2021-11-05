import axios from "axios";
import Header1 from "./Header1";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import DarkCyanButton from './DarkCyanButton'
import VotingComponent from './VotingComponent'

const Box = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column`
const titlee = styled.div`
  padding-bottom: 40px;`
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


function SpecificQuestionPage(props) {
    const [specificQuestion, setSpecificQuestion] = useState(false);
    const AnswerHeader = styled.h2`font-size: 1.5rem;
      color: black;`
    const [answers, setAnswers] = useState([]);
    const [theAnswer, setTheAnswer] = useState('');
    console.log(specificQuestion);
    const questionid = props.match.params.questionid;
    const [info, setInfo] = useState(false);

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
        }, {withCredentials: true}).then(res => {

            setTheAnswer('');
            window.location.reload();

        })
    }


    function getQuestion() {
        axios.get('http://localhost:3030/question/' + questionid).then(res => {
            setInfo(res.data);
            setSpecificQuestion(res.data);

        });
    }

    console.log('length is ' + answers
    );
    function getAnswers() {
        axios.get('http://localhost:3030/answers/' + questionid, {withCredentials:true}).then(res => {
            setAnswers(res.data);
        });}

        useEffect(() => {
            getQuestion();
            getAnswers();
        }, []);
        return (
            <>

                <Box>
                    <div><Header1>{info && info.title}</Header1></div>
                    <hr style={{borderColor: 'lightgrey', width: '-webkit-fill-available'}}></hr>
                    <div style = {{display:'flex', justifyContent:'space-between'}}><div style={{color: 'black', display: 'flex'}}> <VotingComponent></VotingComponent>
                        <div><div children = {info.description} style ={{color:'black', padding: "15px 40px"}}></div>  </div>

                    </div>

                        <span style = {{alignSelf: 'flex-end', color:'black'}} children={specificQuestion.email}>asked by {specificQuestion.email} </span>
                    </div>


                    <Header1 style ={{margin:'20px 0px'}}>Answers</Header1>
                    {answers && answers.length > 0 && answers.map(a => (<>

                            <hr style={{borderColor: 'lightgrey', width: '-webkit-fill-available'}}></hr>
                            <div style = {{display:'flex', justifyContent:'space-between'}}><div style={{color: 'black', display: 'flex'}}>voting arrow up <br/> number of votes <br/> voting
                                arrow down
                                <div children = {a.description} style ={{color:'black', padding: "15px 40px"}}></div>

                            </div>

                     <span style = {{alignSelf: 'flex-end', color:'black'}}children={a.email}>          asked by {a.email} </span>
                            </div>

                        </>
                    ))}


                    <hr style={{borderColor: 'lightgrey', width: '-webkit-fill-available'}}></hr>


                    <AnswerHeader style={{margin: '10px 0px 10px'}}>Your answer</AnswerHeader>

                    <QuestionBodyTextArea value={theAnswer} onChange={ev => setTheAnswer(ev.target.value)}
                                          placeholder="Please describe your answer in detail (using Markdown)."/>
                    <DarkCyanButton style={{width: 'fit-content'}} type={'submit'} onClick={ev => postAnswer(ev)}>Post
                        answer</DarkCyanButton>
                </Box>
            </>
        );
    }


    export default SpecificQuestionPage;