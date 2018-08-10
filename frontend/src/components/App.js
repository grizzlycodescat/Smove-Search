import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";

const Outer = styled.div`
	text-align:center;
`;
// const Title = styled.h1`
// 	font-size: 1.5em;
// `;

// const Intro = styled.p`
// 	font-size: large;
// `;

class App extends Component {
	// render() {
	// 	return (
	// 		<Outer>
	// 			<Header>
	// 				<Logo src={logo} alt="logo" />
	// 				<Title>Welcome to React</Title>
	// 			</Header>
	// 			<Intro>
	//       To get started, edit <code>src/App.js</code> and save to reload.
	// 			</Intro>
	// 		</Outer>
	// 	);
	// }
	render() {
		return (
			<Outer>
				<Header/>
			</Outer>
		);
	}
}

export default App;
