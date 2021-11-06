import styled from 'styled-components';
import PropTypes from 'prop-types';

const UpVote = styled.div`
    width:0;
  height:0;
  border-left:18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 18px solid ${props => props.active ? 'orange' : 'lightgrey'};
  padding:0;
  cursor: ${props => props.active ? 'not-allowed' : 'pointer'}; 
  `;
const DownVote = styled.div`    width:0;
  height:0;
  border-left:18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 18px solid ${props => props.active ? 'orange' : 'lightgrey'};
  padding:0;
  cursor:${props => props.active ? 'not-allowed' : 'pointer'};
`

const Votes = styled.div`text-align:center;`

function VotingComponent(props){
  return (

      <div {...props}>
        <UpVote active = {props.vote === 1}></UpVote>
          <Votes>{props.value}</Votes>
        <DownVote active = {props.vote === -1}></DownVote>
      </div>

  )
}

VotingComponent.propTypes = {
    votes: PropTypes.number.isRequired,
    OnUpVote: PropTypes.func,
    OnDownVote: PropTypes.func,
}

export default VotingComponent