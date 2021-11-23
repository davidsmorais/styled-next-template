import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from 'Theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "editundo";
  src: url("editundo.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "OldWizard";
  src: url("OldWizard.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${Theme.gradients.accentGradient}
  }
  h1, h2, h3 {
    font-family: OldWizard;
  }
`;


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
