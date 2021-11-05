import styled from 'styled-components';

const UpVote = styled.div`
    width:0;
  height:0;
  border-left:18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 18px solid lightgrey;
  padding:0;
  cursor:pointer;
  `;
const DownVote = styled.div`    width:0;
  height:0;
  border-left:18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 18px solid lightgrey;
  padding:0;
  cursor:pointer;
`

function VotingComponent(){
  return (

      <div>
        <UpVote></UpVote>
          &nbsp;&nbsp;  0
        <DownVote></DownVote>
      </div>

  )
}

export default VotingComponent