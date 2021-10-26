import styled from 'styled-components';
import DarkCyanButtonLink from './DarkCyanButtonLink';
import DarkCyanButton from './DarkCyanButton';
import Header1 from './Header1';
import Input from './Input';
import {useState} from 'react';
import axios from "axios";
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

    function askQuestion(ev){
        
        axios.post('http://localhost:3030/askquestion', {
            title: title,
                description: description,

        }, {withCredentials:true}).then(res => console.log(res))
    }

    return (
        <Container>
            <Header1 style={{marginBottom: '20px'}}>Ask a public question</Header1>
            <form onSubmit ={ev => askQuestion(ev)}>
            <Input type="text" placeholder="Title..." value = {title} onChange={ev => setTitle(ev.target.value)}/>
            <QuestionBodyTextArea value = {description} onChange = {ev => setDescription(ev.target.value)} placeholder="Please describe your question in detail (using Markdown)."/>
            <DarkCyanButton type ={'submit'} >Post question</DarkCyanButton>
            </form>
        </Container>
    );

}

