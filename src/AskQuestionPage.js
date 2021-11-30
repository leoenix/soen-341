import styled from 'styled-components';
import DarkCyanButtonLink from './DarkCyanButtonLink';
import DarkCyanButton from './DarkCyanButton';
import Header1 from './Header1';
import Input from './Input';
import {useState} from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom';

const Container = styled.div`
  padding: 18px;
`;


const QuestionBodyTextArea = styled.textarea`
  background: none;
  border: 1px solid #aaa;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box:
  padding: 10px;
  min-height: 200px;
  margin-bottom: 20px;
`;

export default function AskQuestionPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState();
    const [goToQuestion, setGoToQuestion] = useState('');
    const [notLoggedIn, setnotLoggedIn] = useState(false);

    function askQuestion(ev) {
        ev.preventDefault();
        axios.post('http://localhost:3030/askquestion', {
            title: title,
            description: description,

        }, {withCredentials: true}).then(res => setGoToQuestion('/question/' + res.data[0])).catch(() => setnotLoggedIn(true))
    }

    return (
        <Container>{
            goToQuestion && (<Redirect to={goToQuestion}/>)
        }
            <Header1 style={{marginBottom: '20px'}}>Ask a public question</Header1>
            <form onSubmit={ev => askQuestion(ev)}>
                <Input required type="text" placeholder="Title..." value={title}
                       onChange={ev => setTitle(ev.target.value)}/>
                <QuestionBodyTextArea required value={description} onChange={ev => setDescription(ev.target.value)}
                                      placeholder="Please describe your question in detail."/>
                <DarkCyanButton type={'submit'}>Post question</DarkCyanButton>
            </form>
            {!!notLoggedIn && (
                <div style={{color: "red", paddingTop: 12 + "px"}}>
                    {" "}
                    Please log in first
                </div>
            )}
        </Container>
    );

}

