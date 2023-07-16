import { styled } from "styled-components";
import { useEffect, useState } from "react";
import data from "./test.json";
import SearchResult from "./SearchResult";

const SearchedListContainerStyle = styled.section`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.buttonTextColor};
  padding: 20px 25px;
  margin-top: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  & > span {
    color: ${(props) => props.theme.recommendTextColor};
    font-size: 12px;
    font-weight: 700;
    margin: 10px 5px;
    background-color: ${(props) => props.theme.buttonTextColor};
  }
`;

interface searchDataType {
  title: string;
}

const SearchResultList = () => {
  const [searchData, setSearchData] = useState<searchDataType[]>([]);

  useEffect(() => {
    setSearchData(data);
  }, [setSearchData]);

  return (
    <SearchedListContainerStyle>
      <span>추천 검색어</span>
      {/* 추천 검색어 리스트 */}
      {searchData.length > 0 ? (
        searchData.slice(0, 7).map((item: searchDataType) => {
          return <SearchResult len={searchData.length} title={item.title} />;
        })
      ) : (
        <SearchResult len={searchData.length} title={"검색어 없음"} />
      )}
    </SearchedListContainerStyle>
  );
};

export default SearchResultList;
