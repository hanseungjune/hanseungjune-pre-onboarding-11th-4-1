import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchIconStyle = styled(FaSearch)`
  font-size: 25px;
  background-color: ${(props) => props.theme.buttonTextColor};
  margin-right: 15px;
`;

const SearchedListStyle = styled.div<{ len: number }>`
  display: flex;
  align-items: center;
  margin: 10px 10px;
  background-color: ${(props) => props.theme.buttonTextColor};

  & > span {
    background-color: ${(props) => props.theme.buttonTextColor};
    font-size: 15px;
    font-weight: ${(props) => (props.len > 0 ? 500 : 900)};
  }
`;

interface SearchResultPropsType {
  len: number;
  title: string;
}

const SearchResult = ({ len, title }: SearchResultPropsType) => {
  return (
    <>
      <SearchedListStyle len={len}>
        <SearchIconStyle />
        <span>{title}</span>
      </SearchedListStyle>
    </>
  );
};

export default SearchResult;
