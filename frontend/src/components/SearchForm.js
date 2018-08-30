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

const Searchbutton = styled.button`
	position: relative;
	top: -29px;
	left: 6%;
`;

class SearchForm extends Component {
	render() {
		return (
			<Background>
				<h3>Type something to search for it here</h3>
				<form>
					<Input id="name" onChange={this.props.triggeredUpdate}/>
					<Searchbutton id="searchButton" onClick={this.props.filterData}>Search</Searchbutton>
				</form>
			</Background>
		);
	}
}

export default SearchForm;
