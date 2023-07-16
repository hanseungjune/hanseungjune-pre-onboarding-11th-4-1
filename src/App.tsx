import { styled } from "styled-components";
import SearchHeader from "./components/SearchHeader";

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
      {/* 검색을 하게되면, 추천 관련 검색어 나오게 하기 */}
    </AppContainerStyle>
  );
}

export default App;
