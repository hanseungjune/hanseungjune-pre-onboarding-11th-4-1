import { styled } from "styled-components";
import SearchHeader from "./components/SearchHeader";
import SearchForm from "./components/SearchForm";
import SearchResultList from "./components/SearchResultList";

const AppContainerStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 5% 0%;
`;

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
