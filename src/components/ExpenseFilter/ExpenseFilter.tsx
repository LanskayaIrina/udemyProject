import React from "react";

import {
  ExpensesFilterContainer,
  ExpensesFilterControl,
  ExpensesFilterLabel,
  ExpensesFilterSelect,
} from "./ExpenseFilter.style";

interface ExpenseFilterProps {
  onFilterByYear(year: number): void;
}

export const ExpensesFilter = ({ onFilterByYear }: ExpenseFilterProps) => {
  return (
    <ExpensesFilterContainer>
      <ExpensesFilterControl>
        <ExpensesFilterLabel>Filter by year</ExpensesFilterLabel>
        <ExpensesFilterSelect onChange={(e) => onFilterByYear(+e.target.value)}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </ExpensesFilterSelect>
      </ExpensesFilterControl>
    </ExpensesFilterContainer>
  );
};
