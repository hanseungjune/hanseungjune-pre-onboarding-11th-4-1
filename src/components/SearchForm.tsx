import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTyping } from "store/search";
import { useTyping } from "hooks/hooks";

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

export interface typingType {
  searchReducer: {
    typing: string;
  };
}

const SearchForm = () => {
  const typing = useTyping();
  const dispatch = useDispatch();

  const typingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTyping(e.target.value));
  };

  return (
    <SearchFormStyle>
      <SearchInputContainerStyle>
        <SearchIconStyle />
        <SearchInputStyle
          type="text"
          placeholder="질병 및 질환 관련 키워드를 검색해보세요."
          value={typing}
          onChange={typingChange}
        />
      </SearchInputContainerStyle>
      <SearchSubmitContainerStyle>
        <button type="submit">검색</button>
      </SearchSubmitContainerStyle>
    </SearchFormStyle>
  );
};

export default SearchForm;
