import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Play', sans-serif;
    font-size: 16px;
    color: #303030;
  }

  body {
    max-width: 1400px;
    margin: auto;
  }

  hr {
    opacity: 0.4;
  }
`;

export default GlobalStyle;
