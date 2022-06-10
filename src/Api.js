import React, { Component } from "react";

class Api extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		/*
		const url =
			"https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";

		fetch(url)
			.then((result) => result.json())
			.then((result) => {
                this.setState({
					data: result,
				});
			});
        */
		setTimeout(() => {
			this.setState({
				data: ["...", ["..."], [""], ["https://en.wikipedia.org/wiki/..."]],
			});
		}, 1000);
	}

	render() {
		const { data } = this.state;

		const result = data.map((entry, index) => {
			console.log(entry);
			return <li key={index}>{entry}</li>;
		});

		return (
			<div className="container">
				<h1>React Tutorial 2</h1>
				<ul>{result}</ul>
			</div>
		);
	}
}

export default Api;
