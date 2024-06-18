import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #e8e8e8;
    --orange: #FF6604;
    --purple: #6D36FB;
    --green: #015F43;
    --white: #FFFFFF;

    --green-light: #00B37E;

    --text: #C4C4CC;

    --shape: #323238;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
      width: 100%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
      width: 100%;
    }

    @media (max-width: 430px) {
      font-size: 87.5%;
      width: 110%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    scrollbar-width: none;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`