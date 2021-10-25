import styled from 'styled-components';

const QuestionStats = styled.div `
    display: inline-block;
    text-align: center;
    font-size: 1.2rem;
    color: #085e72;
    margin-top: 7px;
    span{
        font-size: .7rem;
        display: block;
        font-weight: 300;
        margin-top: 4px;
    }
`;

const QuestionTitleArea = styled.div `
    padding: 0 30px;
`;

const QuestionHyperlink = styled.a `
    margin-bottom: 5px:
    text-decoration: none;
    color: #085e72;
    font-size: 1.1rem;
    display: block;
`;

const Tag = styled.span `
    display: inline-block;
    margin-right: 5px;
    margin-top: 3px;
    background-color: #F48024;
    color: #fff;
    padding: 7px;
    border-radius: 4px;
    font-size: .9rem;
`;

const StyledQuestionRow = styled.div`
    background-color: rgba(121, 159, 168, .1);
    color: #000000;
    padding: 15px 15px 10px;
    display: grid;
    grid-template-columns: repeat(3, 50px) 1fr;
    border-top: 1px solid #555;
`;

const AuthorAndTime = styled.div `
    display: inline-block;
    color: #085e72;
    font-size: .8rem;
    float: right;
    padding: 10px 0;
`;

const UserHyperlink = styled.a`
    color: #085e72;
`;


function QuestionRow() {
    return (
        <StyledQuestionRow>
        <QuestionStats>0<span>votes</span></QuestionStats>
        <QuestionStats>1<span>answers</span></QuestionStats>
        <QuestionStats>6<span>views</span></QuestionStats>
        <QuestionTitleArea>
            <QuestionHyperlink> How to create a full stack website</QuestionHyperlink>
            <AuthorAndTime> 
                asked 15 mins ago <UserHyperlink>njayem</UserHyperlink>
            </AuthorAndTime>
            <Tag>javascript</Tag>
            <Tag>html</Tag>
            <Tag>css</Tag>
            <Tag>Node.js</Tag>
        </QuestionTitleArea>
    </StyledQuestionRow>
    );

}

export default QuestionRow;