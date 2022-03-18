import React, { Component } from "react";

class B extends Component {
	state = {};
	render() {
		const { details } = this.props;
		const { name, age, dept, total } = details;
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>name</th>
							<th>age</th>
							<th>dept</th>
							<th>total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{name}</td>
							<td>{age}</td>
							<td>{dept}</td>
							<td>{total}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default B;
