import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  @font-face {
    font-family: sans-serif;
  }

  :root {
    font-size: 16px;
  }

  body {
    height: 100vh;
    min-height: 500px;
  }
`;

export default GlobalStyles;
