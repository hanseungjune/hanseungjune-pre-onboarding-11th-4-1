import SearchHeader from "./components/SearchHeader";
import SearchForm from "./components/SearchForm";
import SearchResultList from "./components/SearchResultList";
import { AppContainerStyle } from "styles/styles";

function App() {
  return (
    <AppContainerStyle>
      {/* 헤더 */}
      <SearchHeader />
      {/* 검색창 */}
      <SearchForm />
      {/* 검색을 하게되면, 추천 관련 검색어 나오게 하기 */}
      <SearchResultList />
    </AppContainerStyle>
  );
}

export default App;
