import { useActiveSearchIndex, useShowing, useTyping } from "hooks/hooks";
import { setActiveSearchIndex, setTyping } from "store/search";
import { useDispatch } from "react-redux";
import React from "react";
import {
  SearchFormStyle,
  SearchIconStyle,
  SearchInputContainerStyle,
  SearchInputStyle,
  SearchSubmitContainerStyle,
} from "styles/styles";

const SearchForm = () => {
  const typing = useTyping();
  const dispatch = useDispatch();
  const activeSearchIndex = useActiveSearchIndex();
  const showing = useShowing();

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
      dispatch(setActiveSearchIndex(-1));
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
