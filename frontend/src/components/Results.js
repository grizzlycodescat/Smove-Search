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
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			refinedData:[],
		}
	}

	// getData =  () => {
	// 	fetch("https://challenge.smove.sg/bookings")
	// 	.then(response => response.json())
	// 	.then(responseData => {
	// 		// console.log(responseData)
	// 		this.setState({
	// 			data:responseData,
	// 		})
	// 		console.log(this.state.data);
	// 	})
	// }

	getData = async () => {
		const response = await fetch("https://challenge.smove.sg/bookings");
		const json = await response.json();
		this.setState({
			data: json,
		})
		console.log(this.state.data);
	} 

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<Background>
				<h3>{this.props.searchQuery}</h3>
			</Background>
		);
	}
}

export default Results;
