import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Results from "./Results";
import Map from "./Map";

const Outer = styled.div`
	text-align:center;
`;

class App extends Component {

	render() {
		return (
			<Outer>
				<Header/>
				<SearchForm/>
				<Results/>
				<Map/>
			</Outer>
		);
	}
}

export default App;
