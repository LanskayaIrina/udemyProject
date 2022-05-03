import React from "react";

import { ExpenseDate } from "./ExpenseDate/ExpenseDate";

import { Date, ExpenseItemContainer, Price, Title } from "./ExpenseItem.style";

interface ExpenseItemProps {
  expense: { date: Date; title: string; price: number };
}

export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  return (
    <ExpenseItemContainer className="card">
      <Date>
        <ExpenseDate date={expense.date} />
      </Date>
      <Title>{expense.title}</Title>
      <Price>${expense.price}</Price>
    </ExpenseItemContainer>
  );
};
