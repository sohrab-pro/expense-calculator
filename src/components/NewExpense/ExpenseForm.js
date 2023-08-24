import React, { useRef } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const getTitle = useRef();
	const getAmount = useRef();
	const getDate = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: getTitle.current.value,
			amount: getAmount.current.value,
			date: new Date(getDate.current.value),
		};

		props.onSaveExpenseData(expenseData);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" ref={getTitle} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" ref={getAmount} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2019-01-01" max="2023-12-31" ref={getDate} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
