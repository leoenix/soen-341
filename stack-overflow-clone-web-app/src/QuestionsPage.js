import styled from 'styled-components';
import QuestionRow from './QuestionRow';

const TopQuestionsHeader = styled.h1`
    font-size: 1.8rem;
    color: #085e72;
`;

const TopQuestionsHeaderRow = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    padding: 30px 20px;
`;

const DarkCyanButton = styled.button`
    background-color: #085e72;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 12px 10px;
`;

function QuestionsPage() {
    return(
        <main>
            <TopQuestionsHeaderRow>
                <TopQuestionsHeader>Top Questions</TopQuestionsHeader>
                <DarkCyanButton>Ask&nbsp;Question</DarkCyanButton>
            </TopQuestionsHeaderRow>
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
        </main>
    );
}

export default QuestionsPage;

