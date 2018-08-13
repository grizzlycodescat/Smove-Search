import React, { Component } from "react";
import styled from "styled-components";

const Background = styled.div`
	background-color: #75AAFF;
	height: 100px;
	padding: 20px;
	color: white;

	> h3 {
		color: blanchedAlmond;
		position: relative;
		top: -25px;
	}
`;

class Results extends Component {

	render() {
		return (
			<Background>This is where the results will be</Background>
		);
	}
}

export default Results;
