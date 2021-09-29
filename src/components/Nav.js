import React from "react";
import { Button, StyledNav } from "../styles/StyledNav.styled";

const Nav = ({ onThemeChange, mode }) => {
  return (
    <StyledNav>
      <Button onClick={onThemeChange} mode={mode}>
        {mode} theme
      </Button>
    </StyledNav>
  );
};

export default Nav;
