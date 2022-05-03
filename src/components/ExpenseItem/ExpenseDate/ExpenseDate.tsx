import React from "react";
import {
  ExpenseDateContainer,
  ExpenseDateDay,
  ExpenseDateMonth,
  ExpenseDateYear,
} from "./ExpenseDate.style";

interface ExpenseDateProps {
  date: Date;
}

export const ExpenseDate = ({ date }: ExpenseDateProps) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <ExpenseDateContainer>
      <ExpenseDateMonth>{month}</ExpenseDateMonth>
      <ExpenseDateYear>{year}</ExpenseDateYear>
      <ExpenseDateDay>{day}</ExpenseDateDay>
    </ExpenseDateContainer>
  );
};
