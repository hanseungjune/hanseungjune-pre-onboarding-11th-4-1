import { SearchIconStyle, SearchedListStyle } from "styles/styles";
import { SearchResultPropsType } from "interface/interface";

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
