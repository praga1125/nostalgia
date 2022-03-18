import React, { Component } from "react";

export default class C extends Component {
	state = {
		details: this.props.details,
	};
	renderRow = (detail) => {
		const { name, age, dept, total } = detail;

		return (
			<tr>
				<td>{name}</td>
				<td>{age}</td>
				<td>{dept}</td>
				<td>{total}</td>
			</tr>
		);
	};

	nameSort = () => {
		const { details } = this.state;

		details.sort((a, b) => {
			// interview question
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		this.setState({ details });
	};

	render() {
		const { details } = this.state; // [{}, {}, ...{}]

		return (
			<div>
				<table>
					<thead>
						<tr>
							<th onClick={this.nameSort}>name</th>
							<th>age</th>
							<th>dept</th>
							<th>total</th>
						</tr>
					</thead>
					<tbody>{details.map((detail) => this.renderRow(detail))}</tbody>
				</table>
			</div>
		);
	}
}
