import styled from "styled-components";

export const DarkButtonStyle = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  &:active {
    background-color: #510674;
    border-color: #510674;
  }

  &.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;

    &:hover,
    &:active {
      background-color: #ddb3f8;
    }
  }
`;
