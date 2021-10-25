import styled from 'styled-components';
import QuestionRow from './QuestionRow';
import Header1 from './Header1';
import DarkCyanButtonLink from './DarkCyanButtonLink';

const TopQuestionsHeaderRow = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    padding: 30px 20px;
`;

function QuestionsPage() {
    return(
        <main>
            <TopQuestionsHeaderRow>
                <Header1>Top Questions</Header1>
                <DarkCyanButtonLink to={'/ask'}>Ask&nbsp;Question</DarkCyanButtonLink>
            </TopQuestionsHeaderRow>
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

