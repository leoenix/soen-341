import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
// render this
const UpwardArrow = styled.div`
	width: 0;
	height: 0;
	border-left: ${props => props.size === "small" ? '10px' : '20px'} solid transparent;
	border-right: ${props => props.size === "small" ? '10px' : '20px'} solid transparent;
	border-bottom: ${props => props.size === "small" ? '10px' : '20px'} solid
		${(props) => (props.uservote === 1 ? "#f48024;" : "lightgrey")};
	padding: 0;
`;

const DownwardArrow = styled.div`
	width: 0;
	height: 0;
	border-left: ${props => props.size === "small" ? '10px' : '20px'} solid transparent;
	border-right: ${props => props.size === "small" ? '10px' : '20px'} solid transparent;
	border-top: ${props => props.size === "small" ? '10px' : '20px'} solid
		${(props) => (props.uservote === -1 ? "#f48024;" : "lightgrey")};
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
	pointer-events: ${(props) => (props.disabled ? "none" : "pointer")};
	
`;

const VoteTotal = styled.div`
	text-align: center;
	width: ${props => props.size === "small" ? '31px' : '52px'};
	padding: ${props => props.size === "small" ? '2px 0 2px' : '7px 0 7px'};
	font-size:${props => props.size === "small" ? '1rem' : '1.4rem'};
	color: black;
	line-height: ${props => props.size === "small" ? '1rem' : '1.4rem'};
`;

function VotingArrows(props) {

	return (
		<div {...props}>
			<ArrowButton onClick={() => props.onUpvote()} disabled = {props.disabled} >
				{" "}
				<UpwardArrow uservote={props.userVote} disabled = {props.disabled} size = {props.size}/>{" "}
			</ArrowButton>
			<VoteTotal size = {props.size}> {props.total} </VoteTotal>
			<ArrowButton onClick={() => props.onDownvote()} disabled = {props.disabled}>
				{" "}
				<DownwardArrow uservote={props.userVote}   size = {props.size} />{" "}
			</ArrowButton>
		</div>
	);
}

VotingArrows.propTypes = {
	total: PropTypes.number.isRequired,
	userVote: PropTypes.number.isRequired,
	onUpvote: PropTypes.any,
	onDownvote: PropTypes.any,
	disabled: PropTypes.bool
};

export default VotingArrows;
