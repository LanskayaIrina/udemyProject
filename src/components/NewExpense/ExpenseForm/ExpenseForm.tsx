import React, { useState } from "react";

import { Expense } from "../../../App";

import { NewExpenseButton } from "../NewExpense.style";
import {
  ControlInput,
  ControlLabel,
  ExpenseActions,
  NewExpenseControl,
  NewExpenseControls,
} from "./ExpenseForm.style";

interface UserInput {
  enteredTitle: string;
  enteredAmount: string;
  enteredDate: string;
}

interface ExpenseFormProps {
  onSaveExpanseData(state: Expense): void;
}

export const ExpenseForm = ({ onSaveExpanseData }: ExpenseFormProps) => {
  const [userInput, setUserInput] = useState<UserInput>({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.currentTarget.value };
    });
  };

  const amountChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, enteredAmount: e.currentTarget.value });
  };

  const dateChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      enteredDate: e.currentTarget.value,
    });
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (
      !userInput.enteredDate ||
      !userInput.enteredTitle ||
      !userInput.enteredAmount
    ) {
      return;
    }

    onSaveExpanseData({
      title: userInput.enteredTitle,
      price: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    });

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <NewExpenseControls>
        <NewExpenseControl>
          <ControlLabel>Title</ControlLabel>
          <ControlInput
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </NewExpenseControl>
        <NewExpenseControl>
          <ControlLabel>Amount</ControlLabel>
          <ControlInput
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </NewExpenseControl>
        <NewExpenseControl>
          <ControlLabel>Date</ControlLabel>
          <ControlInput
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </NewExpenseControl>
      </NewExpenseControls>
      <ExpenseActions>
        <NewExpenseButton type="submit">add expense</NewExpenseButton>
      </ExpenseActions>
    </form>
  );
};
