import axios from "axios";
import styled from 'styled-components';
import QuestionRow from './QuestionRow';
import Header1 from './Header1';
import DarkCyanButtonLink from './DarkCyanButtonLink';
import {useEffect, useState} from 'react';

const TopQuestionsHeaderRow = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    padding: 30px 20px;
`;

function QuestionsPage() {
    const [allQuestions, setAllQuestions] = useState([]);

    function getAllQuestions(){
        axios.get('http://localhost:3030/questions', {withCredentials:true}).then(res => setAllQuestions(res.data));
    }

    useEffect(() => getAllQuestions(), []);

    return(
        <main>
            <TopQuestionsHeaderRow>
                <Header1>All questions</Header1>
                <DarkCyanButtonLink to={'/ask'}>Ask&nbsp;Question</DarkCyanButtonLink>
            </TopQuestionsHeaderRow>
            {allQuestions && allQuestions.length > 0 && allQuestions.map(q => (
                <QuestionRow email = {q.email} title = {q.title} qid = {q.questionid} description = {q.description}/>
            ))}
        </main>
    );
}



export default QuestionsPage;

