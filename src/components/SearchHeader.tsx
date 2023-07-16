import { styled } from "styled-components";

const TitleH1Style = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 2%;
  letter-spacing: -0.2rem;
`;

const SearchHeader = () => {
  return (
    <>
      <TitleH1Style>국내 모든 임상시험 검색하고</TitleH1Style>
      <TitleH1Style>온라인으로 참여하기</TitleH1Style>
    </>
  );
};

export default SearchHeader;
