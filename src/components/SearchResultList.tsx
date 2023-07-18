import { styled } from "styled-components";
import { useEffect, useState } from "react";
import data from "./test.json";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { typingType } from "./SearchForm";
import axios from "axios";
import { API_URL } from "App";
import { setShowing } from "store/result";

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

interface setShowingType {
  sickCd: string;
  sickNm: string;
}

export interface showingType {
  resultReducer: {
    showing: setShowingType[];
  };
}

const SearchResultList = () => {
  const typing = useSelector((state: typingType) => state.searchReducer.typing);
  const showing = useSelector(
    (state: showingType) => state.resultReducer.showing
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSearchData = async () => {
      const response = await axios({
        url: `${API_URL}?q=${typing}`,
        method: "GET",
      });
      dispatch(setShowing(response.data));
    };
    fetchSearchData();
  }, [dispatch, setShowing, typing]);

  console.log(showing);

  return (
    <SearchedListContainerStyle>
      <span>추천 검색어</span>
      {/* 추천 검색어 리스트 */}
      {showing.length > 0 && typing.trim() !== "" ? (
        showing.map((item: setShowingType) => {
          return <SearchResult len={showing.length} title={item.sickNm} />;
        })
      ) : (
        <SearchResult len={showing.length} title={"검색어 없음"} typing={typing}/>
      )}
    </SearchedListContainerStyle>
  );
};

export default SearchResultList;
