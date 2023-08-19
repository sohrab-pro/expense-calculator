import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
	const DUMMY_EXPENSES = [
		{
			id: 1,
			date: new Date(2019, 7, 14),
			title: "Groceries",
			amount: 50.0,
		},
		{
			id: 2,
			date: new Date(2023, 7, 13),
			title: "Dinner with friends",
			amount: 75.0,
		},
		{
			id: 3,
			date: new Date(2023, 7, 12),
			title: "Gasoline",
			amount: 30.0,
		},
		{
			id: 4,
			date: new Date(2021, 7, 11),
			title: "Movie night",
			amount: 20.0,
		},
		{
			id: 5,
			date: new Date(2023, 7, 10),
			title: "Coffee",
			amount: 5.0,
		},
		{
			id: 6,
			date: new Date(2022, 7, 9),
			title: "Gym membership",
			amount: 60.0,
		},
		{
			id: 7,
			date: new Date(2023, 7, 8),
			title: "Online shopping",
			amount: 100.0,
		},
		{
			id: 8,
			date: new Date(2023, 7, 7),
			title: "Lunch at work",
			amount: 15.0,
		},
		{
			id: 9,
			date: new Date(2020, 7, 6),
			title: "Home utilities",
			amount: 120.0,
		},
		{
			id: 10,
			date: new Date(2023, 7, 5),
			title: "Birthday gift",
			amount: 50.0,
		},
	];
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
