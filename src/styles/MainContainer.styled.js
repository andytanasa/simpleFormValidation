import styled from "styled-components";

export const MainContainer = styled.main`
  background: linear-gradient(
      ${({ theme }) => theme.primary.red},
      ${({ theme }) => theme.neutral.grayishBlue}
    ),
    url("./images/bg-intro-desktop.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: auto;
  margin: 0 auto;
  min-height: 100%;
  min-width: 1024px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  & > :first-child {
    color: white;
    padding: 10rem;
    width: 50%;
    margin: 0 auto;
    & > h1 {
      font-size: 5rem;
      margin-bottom: 20px;
    }
    & > p {
      font-size: 1.6rem;
      line-height: 1.5;
    }
  }

  & > :nth-child(2) {
    padding: 20px;
    text-align: center;
    width: 50%;
    & > button {
      display: inline-block;
      width: 70%;
      margin: 0 auto;
      background: ${({ theme }) => theme.primary.blue};
      color: white;
      font-size: 1.8rem;
      padding: 2rem 0;
      border-radius: 1rem;
      margin-bottom: 2rem;
      &:hover,
      &:active {
        transform: scale(0.99);
        box-shadow: 0px 7px darkgray;
      }
    }
    & > form {
      background: white;
      padding: 3rem;
      border-radius: 10px;
      width: 70%;
      margin: 0 auto;
      & > label > input {
        width: 100%;
        line-height: 2;
        font-size: 1.5rem;
        padding: 10px 0 10px 50px;
        border-radius: 5px;
        margin-bottom: 40px;
        outline: none;
        border: 1px solid darkgray;
        color: darkgray;
        &:active,
        &:focus {
          border: 2px solid ${({ theme }) => theme.primary.blue};
        }
      }
      & > button {
        width: 100%;
        background: ${({ theme }) => theme.primary.green};
        color: white;
        border: none;
        outline: none;
        border-radius: 10px;
        padding: 30px 0;

        font-size: 1.5rem;
        letter-spacing: 2px;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover,
        &:active {
          transform: scale(0.99);
          box-shadow: 0px 7px darkgray;
        }
      }
      & > p {
        text-align: center;
        color: darkgray;
        letter-spacing: 1.5px;
        font-weight: 600;
        & > strong {
          color: red;
        }
      }
    }
  }
`;
