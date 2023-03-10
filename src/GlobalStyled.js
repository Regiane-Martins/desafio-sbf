import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;

    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }`;
