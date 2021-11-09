import styled from "styled-components";
import PropTypes from "prop-types";

const UpwardArrow = styled.div`
	width: 0;
	height: 0;
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
	border-bottom: 20px solid
		${(props) => (props.active ? "#f48024;" : "lightgrey")};
	padding: 0;
`;

const DownwardArrow = styled.div`
	width: 0;
	height: 0;
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
	border-top: 20px solid ${(props) => (props.active ? "#f48024;" : "lightgrey")};
	padding: 0;
`;

const ArrowButton = styled.button`
	border: 0;
	background: none;
	font-size: 2rem;
	display: flex;
	flexdirection: "column" as "column";
	cursor: pointer;
	text-align: center;
`;

const VoteTotal = styled.div`
	text-align: center;
	width: 50px;
	padding: 7px 0 5px;
	font-size: 1.4rem;
	color: black;
	line-height: 1.4rem;
`;

function VotingArrows(props) {
	return (
		<div {...props}>
			<ArrowButton onClick={() => props.onUpvote}>
				{" "}
				<UpwardArrow active={props.vote === 1} />{" "}
			</ArrowButton>
			<VoteTotal> {props.value} </VoteTotal>
			<ArrowButton onClick={() => props.onDownvote}>
				{" "}
				<DownwardArrow active={props.vote === -1} />{" "}
			</ArrowButton>
		</div>
	);
}

VotingArrows.propTypes = {
	value: PropTypes.number.isRequired,
	onUpvote: PropTypes.func,
	onDownvote: PropTypes.func,
};

export default VotingArrows;
