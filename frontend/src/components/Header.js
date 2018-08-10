import React, {Component} from "react";
import styled, { keyframes } from "styled-components";
import logo from "../logo.svg";


const Header1 = styled.div`
	background-color: #223;
	height: 100px;
	padding: 20px;
	color: white;

	> h1 {
		color: palevioletred;
	}`;

const Title = styled.div`
	font-size: 1.5em;
	color: violet;
	position: absolute;
	top: 7%;
	left 40%;
`;

const spin = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

const Logo = styled.img`
	position: absolute;
	animation: ${spin} infinite 20s linear;
	height: 80px;
	left: 20px;
	top: 20px;
`;

const Logo2 = styled.img`
	position: absolute;
	animation: ${spin} infinite 20s linear;
	height: 80px;
	right: 20px;
	top: 20px;
`;

class Header extends Component {
	render() {
		return (
			<div>
				<Header1/>
				<Title>Trip Record App</Title>
				<Logo src={logo}/>
				<Logo2 src={logo}/>

			</div>
		);
	}
}

export default Header;
