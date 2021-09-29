import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.primary.red};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  margin-right: 5rem;
  padding: 10px 40px;
  font-size: 1.3rem;
  letter-spacing: 2px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${({ theme }) => theme.primary.blue};
  &:hover,
  &:active {
    transform: scale(0.98);
    outline: none;
  }
`;
