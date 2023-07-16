import { styled } from "styled-components";
import SearchHeader from "./components/SearchHeader";
import { FaSearch } from "react-icons/fa";

const AppContainerStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 5% 0%;
`;

const SearchFormStyle = styled.form`
  width: 80%;
  height: 8%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.buttonTextColor};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 0 30px;
`;

const SearchInputContainerStyle = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.buttonTextColor};
`;

const StyledSearchIconStyle = styled(FaSearch)`
  font-size: 25px;
  background-color: ${(props) => props.theme.buttonTextColor};
  margin-right: 15px;
`;

const StyledSearchInputStyle = styled.input`
  background-color: ${(props) => props.theme.buttonTextColor};
  font-size: 18px;
  font-weight: 500;

  &::placeholder {
    font-size: 18px;
  }
`;

const SearchSubmitContainerStyle = styled.div`
  width: 12%;
  height: 100%;
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.buttonColor};
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  & > button {
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.buttonTextColor};
    font-weight: 900;
  }
`;

function App() {
  return (
    <AppContainerStyle>
      {/* 헤더 */}
      <SearchHeader />
      {/* 검색창 */}
      <SearchFormStyle>
        <SearchInputContainerStyle>
          <StyledSearchIconStyle />
          <StyledSearchInputStyle
            type="text"
            placeholder="질병 및 질환 관련 키워드를 검색해보세요."
          />
        </SearchInputContainerStyle>
        <SearchSubmitContainerStyle>
          <button type="submit">검색</button>
        </SearchSubmitContainerStyle>
      </SearchFormStyle>
      {/* 검색을 하게되면, 추천 관련 검색어 나오게 하기 */}
    </AppContainerStyle>
  );
}

export default App;
