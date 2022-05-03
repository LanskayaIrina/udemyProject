import React from "react";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { NewExpenseContainer } from "./NewExpense.style";
import { Expense } from "../../App";

interface NewExpenseProps {
  addNewExpense(state: Expense): void;
}

export const NewExpense = ({ addNewExpense }: NewExpenseProps) => {
  return (
    <NewExpenseContainer>
      <ExpenseForm onSaveExpanseData={addNewExpense} />
      {/*<NewExpenseButton>tt</NewExpenseButton>*/}
    </NewExpenseContainer>
  );
};
