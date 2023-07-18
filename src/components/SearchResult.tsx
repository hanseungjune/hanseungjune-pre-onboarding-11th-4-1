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
  len: number;
  typing?: string;
}

const SearchedListStyle = styled.div<SearchedListStyleProps>`
  ${({ theme }) => {
    const { buttonTextColor } = theme;
    return `
  display: flex;
  align-items: center;
  margin: 10px 10px;
  background-color: ${buttonTextColor};

  & > span {
    background-color: ${buttonTextColor};
    font-size: 15px;
    font-weight: ${(props: SearchedListStyleProps) =>
      props.len > 0 && props.typing?.trim() !== "" ? 500 : 900};
  }
  `;
  }}
`;

interface SearchResultPropsType {
  len: number;
  title: string;
  typing?: string;
}

const SearchResult = ({ len, title, typing }: SearchResultPropsType) => {
  return (
    <>
      <SearchedListStyle len={len} typing={typing}>
        <SearchIconStyle />
        <span>{title}</span>
      </SearchedListStyle>
    </>
  );
};

export default SearchResult;
