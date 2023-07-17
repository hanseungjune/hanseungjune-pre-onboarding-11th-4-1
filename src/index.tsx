import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { store } from "store";
import { Provider } from "react-redux";

const theme = {
  textColor: "#343434",
  recommendTextColor: "#7f7f7fc3",
  backgroundColor: "#d0e8fd",
  buttonColor: "#357ae1",
  buttonTextColor: "#ffffff",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);
