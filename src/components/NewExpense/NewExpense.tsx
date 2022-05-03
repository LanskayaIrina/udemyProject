import React from "react";

import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { Expense } from "../../App";

import { NewExpenseContainer } from "./NewExpense.style";

interface NewExpenseProps {
  addNewExpense(state: Expense): void;
}

export const NewExpense = ({ addNewExpense }: NewExpenseProps) => {
  return (
    <NewExpenseContainer>
      <ExpenseForm onSaveExpanseData={addNewExpense} />
    </NewExpenseContainer>
  );
};
