import styled from "styled-components";

export const ExpenseItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
  border-radius: 12px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 2;
  color: white;

  @media (max-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`;

export const Date = styled.h2`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  text-align: start;
  //color: white;

  @media (max-width: 580px) {
    font-size: 1.25rem;
  }
`;

export const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (max-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;
