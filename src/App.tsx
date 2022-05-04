import React, { useState } from "react";

import { NewExpense } from "./components/NewExpense/NewExpense";
import { ExpensesFilter } from "./components/ExpenseFilter/ExpenseFilter";
import { ExpensesList } from "./components/ExpensesList/ExpensesList";
import { ExpensesChart } from "./components/Expenses/ExpensesChart/ExpensesChart";

import "./App.css";

export interface Expense {
  date: Date;
  title: string;
  price: number;
}

const initialExpenses: Expense[] = [
  { date: new Date(2021, 1, 28), title: "Car insurance2", price: 200 },
  { date: new Date(2020, 2, 28), title: "Car insurance1", price: 500 },
  { date: new Date(2021, 5, 15), title: "Car insurance3", price: 100 },
  { date: new Date(2022, 5, 11), title: "Car insurance4", price: 300 },
  { date: new Date(2022, 5, 15), title: "Car insurance5", price: 200 },
];

function App() {
  const [expenses, setExpenses] = useState([...initialExpenses]);
  const [selectedPeriod, setSelectedPeriod] = useState("2020");

  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expense = {
      ...enteredExpenseData,
    };

    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  const filterByYear = (year: string) => {
    setSelectedPeriod(year);

    if (year === "allPeriod") {
      setExpenses([...initialExpenses]);
      return;
    }

    setExpenses(
      initialExpenses.filter(
        (expense) => expense.date.getFullYear().toString() === year
      )
    );
  };

  return (
    <div className="App">
      <NewExpense addNewExpense={saveExpenseDataHandler} />

      <div className="card expenses">
        <ExpensesFilter
          currentYear={selectedPeriod}
          onFilterByYear={filterByYear}
        />
        <ExpensesChart expenses={expenses} />
        <ExpensesList selectedPeriod={selectedPeriod} expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
