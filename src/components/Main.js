import React from "react";
import { MainContainer } from "../styles/MainContainer.styled";

const Main = () => {
  return (
    <MainContainer>
      <div>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time.</p>
        <p>
          Wathching spripted tutorials is great, but understanding how
          developers think is invaluable
        </p>
      </div>
      <div>
        <button>
          Try it free 7 days <span>then $20/mo. thereafter</span>
        </button>
        <form action="">
          <label htmlFor="fname">
            <input type="text" name="fname" placeholder="First name" />
          </label>
          <label htmlFor="lname">
            <input type="text" name="lname" placeholder="Last name" />
          </label>
          <label htmlFor="email">
            <input type="text" name="email" placeholder="Email" />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" placeholder="Password" />
          </label>
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to out{" "}
            <strong>Terms and Services</strong>
          </p>
        </form>
      </div>
    </MainContainer>
  );
};

export default Main;
