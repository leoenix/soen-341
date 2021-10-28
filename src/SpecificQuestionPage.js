import axios from "axios";
import Header1 from "./Header1";
import styled from "styled-components";
import {useState, useEffect} from 'react'

const Box = styled.div`
padding: 40px 20px;`
const titlee = styled.div`
padding-bottom: 40px;`
function SpecificQuestionPage(props) {
    const questionid = props.match.params.questionid;
    const [info, setInfo] = useState(false);
    function getQuestion() {
        axios.get('http://localhost:3030/question/' + questionid).then(res => {
            setInfo(res.data);
        });
    }
    useEffect(() => getQuestion());
    return (
      <>
      <Box>
          <div ><Header1>{info && info.title}</Header1></div>
          <div style={{color: '#085e72', padding: "20px 0px"}} children={info.description}></div>
      </Box>
      </>
    );
}



export default SpecificQuestionPage;