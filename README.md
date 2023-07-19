# Preonboarding Final Project

[![alt text](./public/assets/vercel.png)](https://hanseungjune-pre-onboarding-11th-4-1.vercel.app/)

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

    <img src="public\assets\검색어 추천 기능 구현.gif" alt="한국임상정보 Page"/>

- API 호출별로 로컬 캐싱 구현

  - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)

  - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술

  - `expire time`을 구현할 경우 가산점

    ```ts
    // 추상화 작업

    // 기본 URL을 설정
    // Axios 인스턴스를 생성
    // Map 객체로 cacheKey와 데이터{data, timestamp}를 저장할 객체 생성
    // ExpireTime : 60 minutes
    // path와 config(ex. headers)을 JSON 문자열로 변환하여 캐시Key 생성
    // cacheKey는 url이며, 해당 url 요청에 따른 데이터가 있다면,
    // 만료 되기 전에 해당 요청 데이터를 응답
    // return을 거치지 않는다면, 만료된 캐시는 삭제
    // 캐시된 응답이 없거나 만료된 경우, 실제 HTTP 요청 및 반환
    // 새로운 응답을 캐시에 저장(timestamp: 요청 시간)
    ```

    사실 위에 작성된 주석처럼 로컬 캐싱 기능을 살리는 과정을 어려웠다.
    여러 블로그를 찾아서 했음에도 제각기 방식이 달랐고, 사실 이해하기 어려운 코드가 많았다
    그래서 위의 추상화 작업과 비슷한 코드를 찾아서 작성해보았고, 이는 성공했다.
    ex. 처음 말라리아를 검색할 때 나오는 속도와 이후에 검색할 때 나오는 속도는 확실히 달랐다.

    ```ts
    import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

    class HttpClient {
      private BASE_URL = `http://localhost:4000/sick`;

      // axios 요청 객체 생성
      protected axiosInstance = axios.create({
        baseURL: this.BASE_URL,
      });

      // 캐시 저장 객체 생성(Map)
      private cache = new Map<string, { data: any; timestamp: number }>();
      // 1시간(임의설정)
      private cacheExpireTime = 60 * 60 * 1000;

      async get(
        path: string,
        config?: AxiosRequestConfig
      ): Promise<AxiosResponse<any>> {
        // 요청 데이터 키
        const cacheKey = JSON.stringify({ path, config });
        // 요청 데이터
        const cachedResponse = this.cache.get(cacheKey);

        if (cachedResponse) {
          // 만료되기 전
          if (Date.now() - cachedResponse.timestamp < this.cacheExpireTime) {
            return cachedResponse.data;
          }
          // 만료됨
          this.cache.delete(cacheKey);
        }

        // 캐시된 데이터 없을 때
        const response = await this.axiosInstance.get(path, config);
        // 검색 데이터 캐싱
        this.cache.set(cacheKey, { data: response, timestamp: Date.now() });
        return response;
      }
    }

    // eslint-disable-next-line import/no-anonymous-default-export
    export default new HttpClient();
    ```

    간단하게 주석을 달아서 코드를 해석했다. 물론 수업에서는 주석없이 이해가 되는 코드가 좋은 코드라고 했지만, 그게 아직 나의 레벨에서는 쉽지않다고 느꼈다. 캐싱 작업이 적용 되는 화면을 보면 미세하게 빨라짐이 보일 것이다.

    <img src="public\assets\캐싱 기능 구현.gif" alt="한국임상정보 Page"/>

- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
  - README에 전략에 대한 설명 기술
- API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

  ```js
  // 말라리아 입력 시 호출 횟수:  12회
  useEffect(() => {
    const fetchData = async () => {
      const response = await httpClient.get(`?q=${typing}`);
      dispatch(setShowing(response.data));
      console.info("calling api");
    };
    fetchData();
  }, [dispatch, typing]);
  ```

  일반적으로 입력할 때마다 요청했을 때, 12번의 키보드 타이핑에 맞춰서
  12번 요청이 되버린다.

  ```js
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
  ```

  하지만, debouncing을 통해서 요청에 대한 약간의 딜레이를 준다면 HTTP 요청의 횟수를 줄일 수 있게 된다.
  물론 키보드를 연속적으로 타이핑 할 때 요청 횟수가 줄어들고, 천천히 타이핑을 하게 된다면 똑같이 12회 요청되는 것은 같다. 하지만 UX 측면을 고려할 때는 debouncing이 굉장히 좋지 않나 하는 생각이 든다.
  화면은 다음과 같다.

    <img src="public\assets\디바운싱 기능 구현.gif" alt="한국임상정보 Page"/>

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
- ⭕ class를 활용하여 API 호출 별로 로컬 캐싱 구현
- ❌ 키보드만으로 추천 검색어들로 이동 가능하도록 구현

<br/>

## 🛠️ Stacks

![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg)
![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg) ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white".svg) ![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white".svg)

<br/>

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
