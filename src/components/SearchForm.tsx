import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchFormStyle = styled.form`
  width: 50rem;
  height: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.buttonTextColor};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 0 30px;
  margin-top: 3vh;
`;

const SearchInputContainerStyle = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.buttonTextColor};
`;

const SearchIconStyle = styled(FaSearch)`
  font-size: 25px;
  background-color: ${(props) => props.theme.buttonTextColor};
  margin-right: 15px;
`;

const SearchInputStyle = styled.input`
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

const SearchForm = () => {
  return (
    <SearchFormStyle>
      <SearchInputContainerStyle>
        <SearchIconStyle />
        <SearchInputStyle
          type="text"
          placeholder="질병 및 질환 관련 키워드를 검색해보세요."
        />
      </SearchInputContainerStyle>
      <SearchSubmitContainerStyle>
        <button type="submit">검색</button>
      </SearchSubmitContainerStyle>
    </SearchFormStyle>
  );
};

export default SearchForm;
