import React, { Component } from "react";

/* TODO: pull data from https://openweathermap.org/api */

class Weather extends Component {
	render() {
		const { day } = this.props;

		return <h1>this is the weather for {day}</h1>;
	}
}

export default Weather;
