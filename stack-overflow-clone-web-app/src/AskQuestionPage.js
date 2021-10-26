import styled from 'styled-components';
import DarkCyanButtonLink from './DarkCyanButtonLink';
import DarkCyanButton from './DarkCyanButton';
import Header1 from './Header1';
import Input from './Input';

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

    return (
        <Container>
            <Header1 style={{marginBottom: '20px'}}>Ask a public question</Header1>
            <Input type="text" placeholder="Title..."/>
            <QuestionBodyTextArea placeholder="Please describe your question in detail (using Markdown)."/>
            <DarkCyanButton>Post question</DarkCyanButton>
        </Container>
    );

}

