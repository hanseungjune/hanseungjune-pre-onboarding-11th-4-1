# Preonboarding Final Project

[![alt text](vercel.png)](https://www.naver.com)

<br/>

## 📅 기간

- 2023년 7월 16일 ~ 2023년 07월 19일

## 💭 구현 목표

- 검색창 구현
- 검색어 추천 기능 구현
- 캐싱 기능 구현

- 아래 사이트의 검색영역을 클론하기
  [![Alt text](image.png)](https://clinicaltrialskorea.com/)

## ✅ Task

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
  - 검색어가 없을 시 "검색어 없음 표출"

[GIT 검색하는 화면 나오게 하기]

- API 호출별로 로컬 캐싱 구현
  - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
  - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
  - `expire time`을 구현할 경우 가산점

```js

```

- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
  - README에 전략에 대한 설명 기술
- API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

```js

```

- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
  - 사용법 README에 기술

```js

```

- ⭕ 화면 전체 스켈레톤 코드 작성
- ⭕ 화면 전체 레이아웃 및 페인팅 코드 작성
- ⭕ 검색 및 추천 검색어 요청 기능 구현
- ⭕ HttpClient Class를 활용한 axios API 연동
- ⭕ Redux를 통한 전역 상태 관리
- ⭕ API 호출 횟수 감소를 위한 리팩토링
- ❌ class를 활용하여 API 호출 별로 로컬 캐싱 구현

## 🌈 개발 조건 및 환경

- 언어 : JavaScript / TypeScript
- 사용가능한 기술:
  - 전역 상태 관리 툴(필수 사용 X, 필요 시 사용)
  - 스타일 관련 라이브러리(styled-components, emotion, UI kit, tailwind, antd 등)
  - HTTP Client(axios 등)
  - 라우팅 관련 라이브러리(react-router-dom)

<br/>

## 🛠️ Stacks

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg) ![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg) ![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)

<br/>

<table border>
  <tr>
    <td><img src="https://github.com/wanted-pre-onboarding-11th-team3/pre-onboarding-11th-3-3/assets/64674174/45762045-357b-49d9-acb4-0d70dab0b6ed" alt="GitHub issue Page"/></td>
  </tr>
  <tr>
    <td align="center">clinicaltrialskorea Search Clone Page</td>
  </tr>
</table>

## 🌳 File Tree

```
📦src
 ┣ 📂components
 ┃ ┣ 📜SearchForm.tsx
 ┃ ┣ 📜SearchHeader.tsx
 ┃ ┣ 📜SearchResult.tsx
 ┃ ┗ 📜SearchResultList.tsx
 ┣ 📂fonts
 ┃ ┣ 📜LINESeedKR-Bd.ttf
 ┃ ┣ 📜LINESeedKR-Rg.ttf
 ┃ ┗ 📜LINESeedKR-Th.ttf
 ┣ 📂hooks
 ┃ ┗ 📜hooks.ts
 ┣ 📂interface
 ┃ ┗ 📜interface.ts
 ┣ 📂store
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜result.ts
 ┃ ┗ 📜search.ts
 ┣ 📂styles
 ┃ ┗ 📜styles.ts
 ┣ 📜App.tsx
 ┣ 📜GlobalStyle.ts
 ┣ 📜httpClient.ts
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

## ✒️ 회고

<table>
  <thead>
    <tr>
      <th width="45%">좋았던 점</th>
      <th width="45%">아쉬웠던 점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      </td>
      <td>
      </td>
    </tr>
  </tbody>
</table>
