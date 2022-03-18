import React, { Component } from "react";
import B from "./B";
import C from "./C";

class A extends Component {
	state = {
		currentRecord: 0,
		details: [
			{ name: "b8", age: 10, total: 80, dept: "cs" },
			{ name: "b6", age: 11, total: 90, dept: "it" },
			{ name: "b3", age: 12, total: 80, dept: "eee" },
			{ name: "b4", age: 17, total: 50, dept: "cs" },
			{ name: "b1", age: 13, total: 80, dept: "it" },
			{ name: "b4", age: 14, total: 80, dept: "ece" },
			{ name: "b2", age: 15, total: 70, dept: "it" },
		],
		showAll: true,
		buttonLabel: "View Record",
	};

	updateCurrentRecord = () => {
		const { currentRecord, details } = this.state;

		if (currentRecord < details.length - 1) {
			this.setState((prevState) => {
				return { currentRecord: prevState.currentRecord + 1 };
			});
		} else {
			this.setState({ currentRecord: 0 });
		}
	};

	handleShowAll = () => {
		const { buttonLabel, showAll } = this.state;
		const updatedButtonLabel =
			buttonLabel === "Show All" ? "View Record" : "Show All";
		this.setState({ buttonLabel: updatedButtonLabel, showAll: !showAll });
	};

	render() {
		const { details, currentRecord, showAll } = this.state;
		return (
			<div>
				<button onClick={this.handleShowAll}>{this.state.buttonLabel}</button>
				{showAll ? (
					<C details={details} />
				) : (
					<>
						<button onClick={this.updateCurrentRecord}>next</button>
						<B details={details[currentRecord]} />
					</>
				)}
			</div>
		);
	}
}
export default A;
