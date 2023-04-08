# github-issue-clone

---

- ### 작업내용

  - github API를 사용하여 Issues 페이지 구현 ( 새로운  Issue 등록시 현재 repo에 연결 )
  - Open, Closed별 Issue Tap 구현
  - Label, Milestone, Assignee 모달창 구현 및 API연결
  - 페이지네이션

---

- 사용언어: React, JS
- 라이브러리: react, axios, react-router-dom, react-query, clsx, dayjs

---

  ## Site 소개

---

  ### Issues 페이지 (facebook-react 데이터 사용)
  
 ![openclosed](https://user-images.githubusercontent.com/100064540/230731624-a510ab39-e272-45e8-b8d0-8536854bc801.gif)

  - Open, Closed Tap으로 확인 가능, 페이지별 라우터 구현
  - label( ... Badge별 css 적용 )
  
  </br>
  
---

  ### modal 구현 filter별 API 연결
  
  ![modal](https://user-images.githubusercontent.com/100064540/230731810-9d6324fd-2111-491d-8cbe-33cac4d9df75.gif)

  - 모달별 filter구현 ( filter별 데이터 연결 )
  - input 입력시 데이터가 필터링이 되도록 구현
  - 필터링에 맞는 데이터가 List가 변경되도록 구현
  
  </br>
  
---

  ### modal 구현 filter별 API 연결
  ![issueAdd](https://user-images.githubusercontent.com/100064540/230732050-f519b3cd-917e-4bf9-9109-1466b38c9a50.gif)

  - 현재 repo와 API를 연결하여 new issue 작성시 현재 repo에 등록되도록 구현
  
  </br>
  


  
