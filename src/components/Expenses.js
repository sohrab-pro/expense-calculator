import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card"

const Expenses = (props) => {
	return (
		<Card className="expenses">
			{props.items.map((data) => (
				<ExpenseItem
					key={data.id}
					id={data.id}
					title={data.expenseTitle}
					price={data.expensePrice}
					date={data.expenseDate}>
				</ExpenseItem>
			))}
		</Card>
	);
};

export default Expenses;
