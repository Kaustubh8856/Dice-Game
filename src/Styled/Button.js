import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  padding: 10px 18px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s ease-in-out;
  }
`;
