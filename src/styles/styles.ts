import { SearchResultPropsType } from "interface/interface";
import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";

//index.tsx (Root)
export const theme = {
  textColor: "#343434",
  recommendTextColor: "#7f7f7fc3",
  backgroundColor: "#d0e8fd",
  buttonColor: "#357ae1",
  buttonTextColor: "#ffffff",
};

//App.tsx
export const AppContainerStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 5% 0%;
`;

// SearchForm.tsx
// form tag Style
export const SearchFormStyle = styled.form`
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

// SearchInput && Search Icon Box Style
export const SearchInputContainerStyle = styled.div`
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

// Search Icon Style
export const SearchIconStyle = styled(FaSearch)`
  ${({ theme }) => {
    const { buttonTextColor } = theme;
    return `
    font-size: 25px;
    background-color: ${buttonTextColor};
    margin-right: 15px;
    `;
  }}
`;

// SearchInput Style
export const SearchInputStyle = styled.input`
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

// Submit Button Style
export const SearchSubmitContainerStyle = styled.div`
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

// SearchHeader.tsx
// Header Style
export const TitleH1Style = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: -0.2rem;
`;

// SearchResultList
// Recommend Search Box Style
export const SearchedListContainerStyle = styled.section`
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

// SearchResult.tsx
// Recommend Search Style
export const SearchedListStyle = styled.div<SearchResultPropsType>`
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
