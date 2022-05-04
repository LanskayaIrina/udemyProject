import React from "react";

import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

import { Expense } from "../../App";
import {
  ExpensesListContainer,
  ExpensesListFallback,
} from "./ExpensesList.style";

interface ExpensesListProps {
  selectedPeriod: string;
  expenses: Expense[];
}

export const ExpensesList = ({
  selectedPeriod,
  expenses,
}: ExpensesListProps) => {
  let content: JSX.Element = (
    <ExpensesListFallback>no result</ExpensesListFallback>
  );

  if (selectedPeriod === "allPeriod") {
    content = (
      <>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.date.toISOString()} expense={expense} />
        ))}
      </>
    );
  }

  if (expenses?.length && selectedPeriod !== "allPeriod") {
    content = (
      <>
        {expenses
          .filter(
            (expense) =>
              expense.date.getFullYear().toString() === selectedPeriod
          )
          .map((expense) => (
            <ExpenseItem key={expense.date.toISOString()} expense={expense} />
          ))}
      </>
    );
  }

  return <ExpensesListContainer>{content}</ExpensesListContainer>;
};
