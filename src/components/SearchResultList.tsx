/* eslint-disable react-hooks/exhaustive-deps */
import { useActiveSearchIndex, useShowing, useTyping } from "hooks/hooks";
import { SearchedListContainerStyle } from "styles/styles";
import { setShowingType } from "interface/interface";
import { useDispatch } from "react-redux";
import { setShowing } from "store/result";
import SearchResult from "./SearchResult";
import httpClient from "../httpClient";
import React, { useEffect } from "react";

const SearchResultList = () => {
  const activeSearchIndex = useActiveSearchIndex();
  const dispatch = useDispatch();
  const showing = useShowing();
  const typing = useTyping();

  let timeoutId: NodeJS.Timeout | null = null;

  // 디바운싱을 통해서 API 요청
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (typing !== "") {
      timeoutId = setTimeout(async () => {
        const response = await httpClient.get(`?q=${typing}`);
        dispatch(setShowing(response.data));
        console.info("calling api");
      }, 300);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [dispatch, typing]);

  return (
    <SearchedListContainerStyle>
      <span>추천 검색어</span>
      {showing.length > 0 && typing.trim() !== "" ? (
        showing.map((item: setShowingType, index: number) => {
          return (
            <SearchResult
              key={index}
              isActive={activeSearchIndex === index}
              title={item.sickNm}
            />
          );
        })
      ) : (
        <SearchResult title={"검색어 없음"} />
      )}
    </SearchedListContainerStyle>
  );
};

export default React.memo(SearchResultList);
