import React, { Component } from "react";
import styled from "styled-components";


const Background = styled.div`
	background-color: #50DBE8;
	height: 300px;
	padding: 20px;
	color: white;

	> h3 {
		color: blanchedAlmond;
		position: relative;
		top: -25px;
	}
`;

class Map extends Component {
	render() {
		return (
			<Background>
				<h3>This is where the map will be </h3>
			</Background>
		);
	}
}

export default Map;
