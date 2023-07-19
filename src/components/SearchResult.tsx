import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchIconStyle = styled(FaSearch)`
  ${({ theme }) => {
    const { buttonTextColor } = theme;
    return `
  font-size: 25px;
  background-color: ${buttonTextColor};
  margin-right: 15px;
  `;
  }}
`;

interface SearchedListStyleProps {
  isActive?: boolean;
}

const SearchedListStyle = styled.div<SearchedListStyleProps>`
  ${({ theme, isActive }) => {
    const { buttonTextColor } = theme;
    return `
    display: flex;
    align-items: center;
    margin: 10px 10px;
    background-color: ${buttonTextColor};

    & > span {
      margin-left: 10px;
      background-color: ${isActive ? "yellow !important" : "white !important"};
    }
    `;
  }}
`;

interface SearchResultPropsType {
  title: string;
  isActive?: boolean;
}

const SearchResult = ({ title, isActive }: SearchResultPropsType) => {
  return (
    <>
      <SearchedListStyle isActive={isActive}>
        <SearchIconStyle />
        <span>{title}</span>
      </SearchedListStyle>
    </>
  );
};

export default SearchResult;
