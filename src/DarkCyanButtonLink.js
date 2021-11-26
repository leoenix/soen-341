import styled from 'styled-components';
import { Link } from "react-router-dom";


const DarkCyanButtonLink = styled(Link)
`
  background-color: ${props => props.disabled === true ? 'lightgrey' : '#085e72'};
  color:white;
  cursor: ${props => props.disabled === true ? 'not-allowed' : 'normal'};
    border: 0;
    border-radius: 5px;
    padding: 12px 10px;
    text-decoration: none;
`;

export default DarkCyanButtonLink;