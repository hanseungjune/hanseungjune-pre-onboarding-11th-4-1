import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSearchIndex, setTyping } from "store/search";
import { useTyping } from "hooks/hooks";
import { setShowingType } from "./SearchResultList";

const SearchFormStyle = styled.form`
  ${({ theme }) => {
    const { buttonTextColor } = theme;
    return `
      width: 50rem;
      height: 4rem;
      position: relative;
      display: flex;
      align-items: center;
      background-color: ${buttonTextColor};
      border-radius: 30px;
      padding: 0 30px;
      margin-top: 3vh;
    `;
  }}
`;

const SearchInputContainerStyle = styled.div`
  ${({ theme }) => {
    const { buttonTextColor } = theme;
    return `
    width: 90%;
    height: 4rem;
    display: flex;
    align-items: center;
    background-color: ${buttonTextColor};
    `;
  }}
`;

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

const SearchInputStyle = styled.input`
  ${({ theme }) => {
    const { buttonTextColor } = theme;
    return `
  background-color: ${buttonTextColor};
  font-size: 18px;
  font-weight: 500;

  &::placeholder {
    font-size: 18px;
  }
  `;
  }}
`;

const SearchSubmitContainerStyle = styled.div`
  ${({ theme }) => {
    const { buttonColor, buttonTextColor } = theme;
    return `
  width: 12%;
  height: 100%;
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  & > button {
    background-color: ${buttonColor};
    color: ${buttonTextColor};
    font-weight: 900;
  }
  `;
  }}
`;

export interface typingAndactiveSearchIndexType {
  searchReducer: {
    typing: string;
    activeSearchIndex: number;
  };
}

export interface showingType {
  resultReducer: {
    showing: setShowingType[];
  };
}

const SearchForm = () => {
  const typing = useTyping();
  const dispatch = useDispatch();
  const activeSearchIndex = useSelector(
    (state: typingAndactiveSearchIndexType) =>
      state.searchReducer.activeSearchIndex
  );
  const showing = useSelector(
    (state: showingType) => state.resultReducer.showing
  );

  const typingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTyping(e.target.value));
  };

  const KeyboardMove = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      dispatch(setActiveSearchIndex(Math.max(activeSearchIndex - 1, -1)));
    } else if (e.key === "ArrowDown") {
      dispatch(
        setActiveSearchIndex(
          Math.min(activeSearchIndex + 1, showing.length - 1)
        )
      );
    } else if (e.key === "Enter" && activeSearchIndex > -1) {
      dispatch(setTyping(showing[activeSearchIndex].sickNm));
    }
  };

  const SubmitStop = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SearchFormStyle onSubmit={SubmitStop}>
      <SearchInputContainerStyle>
        <SearchIconStyle />
        <SearchInputStyle
          type="text"
          placeholder="질병 및 질환 관련 키워드를 검색해보세요."
          value={typing}
          onChange={typingChange}
          onKeyDown={KeyboardMove}
        />
      </SearchInputContainerStyle>
      <SearchSubmitContainerStyle>
        <button type="submit">검색</button>
      </SearchSubmitContainerStyle>
    </SearchFormStyle>
  );
};

export default SearchForm;
