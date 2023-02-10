import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@200;400;700&family=Roboto&display=swap");
    font-family: "Roboto", sans-serif;

    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }`;
