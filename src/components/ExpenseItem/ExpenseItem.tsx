import React, { useState } from "react";
import { Date, ExpenseItemContainer, Price, Title } from "./ExpenseItem.style";
import { ExpenseDate } from "./ExpenseDate/ExpenseDate";

interface ExpenseItemProps {
  expense: { date: Date; title: string; price: number };
}

export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  const [title, setTitle] = useState(expense.title);

  return (
    <ExpenseItemContainer className="card">
      <Date>
        <ExpenseDate date={expense.date} />
      </Date>

      <Title>{title}</Title>
      <Price>${expense.price}</Price>
      <button onClick={() => setTitle("changed!")}>change</button>
    </ExpenseItemContainer>
  );
};
