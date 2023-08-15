import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const dummyExpenseData = [
    {
      id: 1,
      expenseDate: new Date(2023, 7, 14),
      expenseTitle: "Groceries",
      expensePrice: 50.0,
    },
    {
      id: 2,
      expenseDate: new Date(2023, 7, 13),
      expenseTitle: "Dinner with friends",
      expensePrice: 75.0,
    },
    {
      id: 3,
      expenseDate: new Date(2023, 7, 12),
      expenseTitle: "Gasoline",
      expensePrice: 30.0,
    },
    {
      id: 4,
      expenseDate: new Date(2023, 7, 11),
      expenseTitle: "Movie night",
      expensePrice: 20.0,
    },
    {
      id: 5,
      expenseDate: new Date(2023, 7, 10),
      expenseTitle: "Coffee",
      expensePrice: 5.0,
    },
    {
      id: 6,
      expenseDate: new Date(2023, 7, 9),
      expenseTitle: "Gym membership",
      expensePrice: 60.0,
    },
    {
      id: 7,
      expenseDate: new Date(2023, 7, 8),
      expenseTitle: "Online shopping",
      expensePrice: 100.0,
    },
    {
      id: 8,
      expenseDate: new Date(2023, 7, 7),
      expenseTitle: "Lunch at work",
      expensePrice: 15.0,
    },
    {
      id: 9,
      expenseDate: new Date(2023, 7, 6),
      expenseTitle: "Home utilities",
      expensePrice: 120.0,
    },
    {
      id: 10,
      expenseDate: new Date(2023, 7, 5),
      expenseTitle: "Birthday gift",
      expensePrice: 50.0,
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={dummyExpenseData} />
    </div>
  );
}

export default App;