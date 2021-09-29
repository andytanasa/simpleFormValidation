import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    transition: all 0.50s linear;
    font-family: 'Roboto', sans-serif;
    
}
ul {
    list-style: none;
}
img {
    max-width: 100%
}
`;
