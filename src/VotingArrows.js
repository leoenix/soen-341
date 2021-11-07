import styled from 'styled-components';
import PropTypes from 'prop-types';

const UpArrow = styled.div `
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${props => props.active ? '#F48024' : '#bbb'};
    padding: 0;
`;


const DownArrow = styled.div `
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid ${props => props.active ? '#F48024' : '#bbb'};
    padding: 0;
`;


const ArrowButton = styled.button`
    border: 0;
    background: none;
    font-size: 2rem;
    display: flex;
    flex: column;
    flexDirection: column;
    cursor: pointer;
    text-align: center;
    padding: 0;
`;

const Count = styled.div`
    text-align: center;
    width: 40px;
    padding: 5px 0px 7px;
    font-size: 1.4rem;
    line-height: 1.4rem;
`;


function VotingArrows(props) {
    return (
        <div {...props}>
            <ArrowButton onClick={ () => props.onUpArrowClick() }> 
                <UpArrow active={props.vote === 1} /> 
            </ArrowButton> 
            <Count> {props.value}</Count>
            <ArrowButton onClick={ () => props.onDownArrowClick() }>
                <DownArrow active={props.vote === -1} /> 
            </ArrowButton>
        </div>
    );
}

VotingArrows.propTypes = {
    value: PropTypes.number.isRequired,
    onUpArrowClick: PropTypes.func,
    onDownArrowClick: PropTypes.func,
};

export default VotingArrows;