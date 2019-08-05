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
    --primary-color: #FF3008;
    --secondary-color: #FF3008;
    --tertiary-color: #D3397E;
    --black: #181919;
    --grey: #DDD;
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
