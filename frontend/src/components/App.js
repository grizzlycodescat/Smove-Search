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
			data: [],
			refinedData: [],
		};
		// this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	handleSearchChange = (event) => {
		this.setState({
			query: event.target.value,
		});
	}

	getData = async () => {
		const response = await fetch("https://challenge.smove.sg/bookings");
		const json = await response.json();
		this.setState({
			data: json,
		})
		// console.log(this.state.data);
	}

	filterData = (e) => {
		e.preventDefault();
		const filtered = this.state.data.filter(element => {
			return element.user.name.toLowerCase().includes(this.state.query.toLowerCase());
		});
		this.setState({
			refinedData: filtered,
		});
		console.log(this.state.refinedData);
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<Outer>
				<Header/>
				<SearchForm triggeredUpdate={this.handleSearchChange} filterData={ (e) => {this.filterData(e)}}/>
				<Results refinedData={this.state.refinedData}/>
				<Map/>
			</Outer>
		);
	}
}

export default App;
