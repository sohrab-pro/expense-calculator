import React, {useState} from "react";

import "./NewExpense.css";

const ExpenseForm = () => {
    const today = new Date();
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: today.toISOString().slice(0, 10),
    });

    const inputChangeHandler = (identifier, value) => {
        setUserInput((prevState => {
            return {...prevState, [identifier]: value};
        }))
    }

    const formSubmitted = (e) => {
        e.preventDefault();
        setUserInput({
            enteredTitle: userInput.enteredTitle,
            enteredAmount: userInput.enteredAmount,
            enteredDate: userInput.enteredDate,
        })

        // saving to local storage
        localStorage.setItem('expenses', JSON.stringify(userInput));

        // clearing local storage
        localStorage.clear();
        
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: today.toISOString().slice(0, 10),
        })
    }

	return (
		<form onSubmit={formSubmitted}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input onChange={(e) => inputChangeHandler('enteredTitle', e.target.value)} value={userInput.enteredTitle} type="text" required />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input onChange={(e) => inputChangeHandler('enteredAmount', e.target.value)} type="number" value={userInput.enteredAmount} min="0.01" step="0.01" required />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input onChange={(e) => inputChangeHandler('enteredDate', e.target.value)} type="date" value={userInput.enteredDate} min="2019-01-01" max="2023-12-31" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
