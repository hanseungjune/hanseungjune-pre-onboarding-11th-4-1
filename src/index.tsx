import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  textColor: "#343434",
  recommendTextColor: "#535c65",
  backgroundColor: "#d0e8fd",
  buttonColor: "#357ae1",
  buttonTextColor: "#ffffff",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
