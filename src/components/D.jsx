import React, { Component } from "react";
import axios from "axios";

class D extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quizzes: []
		};
	}

	componentDidMount() {
		/**
		 * [{
		 * 	question: '',
		 * 	options: [4 string],
		 * 	correctAnswer: ''
		 * },....]
		 */

		axios.get("https://opentdb.com/api.php?amount=5").then((response) => {
			const rawQuizes = response.data.results;
			const quizzes = rawQuizes.map((quiz) => {
				const formattedQuiz = {
					question: quiz.question,
					options: this.shuffleOptions([
						...quiz.incorrect_answers,
						quiz.correct_answer,
					]),
					correctAnswer: quiz.correct_answer,
				};
				return formattedQuiz;
			});

			console.log(quizzes);
			this.setState({ quizzes });
		});
	}

	shuffleOptions = (options = []) => {
		for (let i = options.length - 1; i > 0; i--) {
			const tempIndex = Math.floor(Math.random() * i + 1);
			const temp = options[i];
			options[i] = options[tempIndex];
			options[tempIndex] = temp;
		}
		return options;
	};

	renderQuiz = (quiz) => {
		return (
			<>
				<tr>
					<td>{quiz.question}</td>
				</tr>
				{quiz.options.map((option, index) => {
					return (
						<tr>
							<td>
								<input
									type="radio"
									id={index}
									name="btn"
									value={option}
									onChange={(e) => {
										console.log(e.target.value);
									}}
								/>
								<label htmlFor={index}>{option}</label>
							</td>
						</tr>
					);
				})}
			</>
		);
	};

	renderAnswer = (answer) => {
		return (
			<tr>
				<td>{answer}</td>
			</tr>
		);
	};

	render() {
		const { quizzes } = this.state;

		// console.log(questions);
		return (
			<div>
				<table>
					<tbody>
						{quizzes.map((quiz) =>
							this.renderQuiz(quiz)
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default D;
