import { styled } from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowing } from "store/result";
import { useShowing, useTyping } from "hooks/hooks";
import SearchResult from "./SearchResult";
import httpClient from "../httpClient";

const SearchedListContainerStyle = styled.section`
  ${({ theme }) => {
    const { buttonTextColor, recommendTextColor } = theme;
    return `
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    background-color: ${buttonTextColor};
    padding: 20px 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  
    & > span {
      color: ${recommendTextColor};
      font-size: 12px;
      font-weight: 700;
      margin: 10px 5px;
      background-color: ${buttonTextColor};
    }
    `;
  }}
`;

export interface setShowingType {
  sickCd: string;
  sickNm: string;
}

export interface showingType {
  resultReducer: {
    showing: setShowingType[];
  };
}

const SearchResultList = () => {
  const typing = useTyping();
  const showing = useShowing();
  const dispatch = useDispatch();
  let timeoutId: NodeJS.Timeout | null = null;

  // 말라리아 입력 시 호출 횟수: 1회
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (typing !== "") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // 말라리아 입력 시 호출 횟수:  12회
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await httpClient.get(`?q=${typing}`);
  //     dispatch(setShowing(response.data));
  //     console.info("calling api");
  //   }
  //   fetchData();
  // }, [dispatch, typing]);

  return (
    <SearchedListContainerStyle>
      <span>추천 검색어</span>
      {/* 추천 검색어 리스트 */}
      {showing.length > 0 && typing.trim() !== "" ? (
        showing.map((item: setShowingType) => {
          return <SearchResult len={showing.length} title={item.sickNm} />;
        })
      ) : (
        <SearchResult
          len={showing.length}
          title={"검색어 없음"}
          typing={typing}
        />
      )}
    </SearchedListContainerStyle>
  );
};

export default SearchResultList;
