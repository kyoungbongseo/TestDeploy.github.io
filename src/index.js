import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Api from "./Api";
import "./index.css";

ReactDOM.render(
	/*
	<App />,
    */
	[
		<hr key="0" color="blue" />,
		<App key="1" />,
		<hr key="2" color="blue" />,
		<Api key="3" />,
	],
	document.getElementById("root")
);
