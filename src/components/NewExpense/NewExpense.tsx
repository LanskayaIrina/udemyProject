import React, { useState } from "react";

import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { Expense } from "../../App";

import { NewExpenseContainer } from "./NewExpense.style";
import { DarkButton } from "../shared/Buttons/DarkButton";

interface NewExpenseProps {
  addNewExpense(state: Expense): void;
}

export const NewExpense = ({ addNewExpense }: NewExpenseProps) => {
  const [isExpenseForm, setIsExpenseForm] = useState(false);

  return (
    <NewExpenseContainer>
      {isExpenseForm ? (
        <ExpenseForm
          onSaveExpanseData={addNewExpense}
          onCancel={() => setIsExpenseForm(false)}
        />
      ) : (
        <DarkButton
          title="Add New Expense"
          onClick={() => setIsExpenseForm(true)}
        />
      )}
    </NewExpenseContainer>
  );
};
