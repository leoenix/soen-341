import styled from 'styled-components';

const TopQuestionsHeader = styled.h1`
    font-size: 1.8rem;
    color: #000000;
`;

const TopQuestionsHeaderRow = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    padding: 30px 20px;
`;

const BlueButton = styled.button`
    background-color: #378ad3;
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
                <BlueButton>Ask&nbsp;Question</BlueButton>
            </TopQuestionsHeaderRow>
        </main>
    );
}

export default QuestionsPage;

