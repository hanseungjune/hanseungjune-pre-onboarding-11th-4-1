import SearchHeader from "./components/SearchHeader";
import SearchForm from "./components/SearchForm";
import SearchResultList from "./components/SearchResultList";
import { AppContainerStyle } from "styles/styles";

function App() {
  return (
    <AppContainerStyle>
      <SearchHeader />
      <SearchForm />
      <SearchResultList />
    </AppContainerStyle>
  );
}

export default App;
