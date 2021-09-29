import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { GlobalStyles } from "./styles/Global";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme !== "light" ? setTheme("light") : setTheme("dark");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Nav onThemeChange={themeToggle} mode={theme} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
