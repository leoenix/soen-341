import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const QuestionStats = styled.div`

  text-align: center;
  font-size: 1.2rem;
  color: #085e72;
  margin-top: 7px;

  span {
    font-size: .7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;

const QuestionTitleArea = styled.div`
  padding: 0 30px;
  flex: 1 auto;
  width: auto;
  float: none;
  margin: 0;
  overflow: hidden;
`;

const QuestionHyperlink = styled(Link)`
  margin-bottom: 15px;
  text-decoration: none;
  color: cornflowerblue;
  font-size: 1.6rem;
  display: block;
  padding-top: 15px;
`;

const Tag = styled.span`
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
  display: flex;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
`;

const AuthorAndTime = styled.div`
  display: inline-block;
  color: #085e72;
  font-size: .8rem;
  float: right;
  padding: 10px 0;
`;

const StatsContainer = styled.div`

  color: #085e72;
  font-size: .8rem;
  float: none;

`;

const UserHyperlink = styled.div`
  color: #F48024;
`;
const TagsAndAuthor = styled.div`
  display: flex;
  padding-top: 1rem;

  justify-content: space-between;`
const AllTags = styled.div`
  display: flex;`


function QuestionRow({title, qid, description, email, views, total}) {
    return (
        <StyledQuestionRow>
            <StatsContainer>
                <br/><br/><br/>
                <QuestionStats> {views} <span> views </span></QuestionStats>
            </StatsContainer>
            <QuestionTitleArea>
                <QuestionHyperlink to={'question/' + qid}> {title} </QuestionHyperlink>
                <div>{description}</div>
                <TagsAndAuthor>
                    <div>
                        <Tag> javascript </Tag>
                        <Tag> html </Tag>
                        <Tag> css </Tag>
                    </div>
                    <AuthorAndTime> asked <UserHyperlink>by {email} </UserHyperlink> </AuthorAndTime>

                </TagsAndAuthor>
            </QuestionTitleArea>
        </StyledQuestionRow>
    );

}

QuestionRow.propTypes = {
    title: PropTypes.string.isRequired,
    qid: PropTypes.number.isRequired,

}

export default QuestionRow;