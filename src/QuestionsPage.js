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
    const [user, setUser] = useState("");
    function getAllQuestions(){
        axios.get('http://localhost:3030/questions', {withCredentials:true}).then(res => setAllQuestions(res.data));
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

    useEffect(() => {getAllQuestions(); getUser()}, []);

    return(
        <main>
            <TopQuestionsHeaderRow>
                <Header1>All questions</Header1>
                <DarkCyanButtonLink disabled = {!user} to={ !user ? '' : '/ask'}>Ask&nbsp;Question</DarkCyanButtonLink>
            </TopQuestionsHeaderRow>
            {allQuestions && allQuestions.length > 0 && allQuestions.map(q => (
                <QuestionRow email = {q.email} title = {q.title} qid = {q.questionid} description = {q.description} total = {q.total ? q.total : 0} views = {q.views}/>
            ))}
        </main>
    );
}



export default QuestionsPage;

