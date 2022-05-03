import React, { useState } from "react";

import { ExpenseItem } from "./components/ExpenseItem/ExpenseItem";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { ExpensesFilter } from "./components/ExpenseFilter/ExpenseFilter";

import "./App.css";

export interface Expense {
  date: Date;
  title: string;
  price: number;
}

const expenses: Expense[] = [
  { date: new Date(2021, 1, 28), title: "Car insurance", price: 200 },
  { date: new Date(2020, 2, 28), title: "Car insurance", price: 500 },
  { date: new Date(2021, 5, 15), title: "Car insurance", price: 200 },
];

function App() {
  const [newExpenses, setNewExpenses] = useState([...expenses]);
  const [currentYear, setCurrentYear] = useState(2020);

  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    setNewExpenses((prevState) => {
      return [...prevState, expenseData];
    });
  };

  const filterByYear = (year: number) => {
    setCurrentYear(year);
    setNewExpenses([
      ...expenses.filter((el) => el.date.getFullYear() === year),
    ]);
  };

  return (
    <div className="App">
      <NewExpense addNewExpense={saveExpenseDataHandler} />

      <div className="card expenses">
        <ExpensesFilter
          currentYear={currentYear}
          onFilterByYear={filterByYear}
        />
        {newExpenses.map((expense) => (
          <ExpenseItem key={expense.date.toISOString()} expense={expense} />
        ))}
      </div>
    </div>
  );
}

export default App;
