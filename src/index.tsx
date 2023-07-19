import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { theme } from "styles/styles";
import { store } from "store";
import App from "./App";

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
