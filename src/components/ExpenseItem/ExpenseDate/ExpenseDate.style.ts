import styled from "styled-components";

export const ExpenseDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ExpenseDateMonth = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

export const ExpenseDateDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ExpenseDateYear = styled.div`
  font-size: 0.75rem;
`;
