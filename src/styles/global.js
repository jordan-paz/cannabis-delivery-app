import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    font-family: Roboto;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --bg-color: #FFFFFF;
    --primary-color: #193F00;
    --secondary-color: #359100;
    --tertiary-color: #D3397E;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
  }
  a {
    text-decoration: none;
    color: var(--secondary-color);
  }
  h3 {
    margin: 0;
  }
  p { margin: 0;}
`

export default GlobalStyle
