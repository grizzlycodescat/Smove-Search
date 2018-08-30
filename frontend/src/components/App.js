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

	constructor(props) {
		super(props);
		this.state = {
			query: "",
		};
		// this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	handleSearchChange = (event) => {
		this.setState({
			query: event.target.value,
		});
	}



	render() {
		return (
			<Outer>
				<Header/>
				<SearchForm triggeredUpdate={this.handleSearchChange}/>
				<Results searchQuery={this.state.query}/>
				<Map/>
			</Outer>
		);
	}
}

export default App;
