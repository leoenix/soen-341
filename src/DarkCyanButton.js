import styled from 'styled-components';

const DarkCyanButton = styled.button `
    background-color: ${props => props.disabled === true ? 'lightgrey' : '#085e72'};
  cursor: ${props => props.disabled === true ? 'not-allowed' : 'normal'};
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 12px 10px;
    text-decoration: none;
`;

export default DarkCyanButton;