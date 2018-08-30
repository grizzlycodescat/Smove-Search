import React, { Component } from "react";
import styled from "styled-components";

const Background = styled.div`
	background-color: #9264A7;
	height: 50px;
	padding: 20px;
	color: white;

	> h3 {
		color: blanchedAlmond;
		position: relative;
		top: -25px;
	}
`;

const Input = styled.input`
	width: 50%;
	position: relative;
	top: -30px;
	border-radius: 8px;
`;

class SearchForm extends Component {
	render() {
		return (
			<Background>
				<h3>Type something to search for it here</h3>
				<form>
					<Input id="name" onChange={this.props.triggeredUpdate}/>
				</form>
			</Background>
		);
	}
}

export default SearchForm;
