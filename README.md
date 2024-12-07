# NS-web
### 2024 소프트웨어공학 프로젝트 : 영남대학교 노트북 대여 웹 개발

# 🕹️기능 정리
> 권장 테스트 환경 : 1920 x 1080 px, 크롬 브라우저 기준 확대율 100%

> 테스트 하다가 문의 사항 발생 시 010-9147-5631 로 연락 주세요!!
### 1. 회원가입
- 회원 가입시 기본적으로 `USER` 권한으로 가입
![chrome-capture-2024-12-7](https://github.com/user-attachments/assets/f4d540e2-5a10-4717-ad4f-4f95a0d8800a)

### 2. 로그인
- 관리자용 계정
  - ID : 22012120
  - PW : 123456789abc
- 사용자용 계정
  - 신규 회원가입 진행하시면 됩니다!
### 3. 메인화면
- 관리자 로그인
![chrome-capture-2024-12-7 (1)](https://github.com/user-attachments/assets/e655ea5f-67dd-4b2a-b1ce-6879ba4e71bb)
- 사용자 로그인
![chrome-capture-2024-12-7 (2)](https://github.com/user-attachments/assets/8684f4e9-2ce5-4793-bd88-2f98e1f925a0)

### 4. 리스트 및 세부 정보 조회(노트북, 공지 사항, 1:1 문의)
- 노트북은 드롭다운 메뉴로 대여불가, 대여가능 정렬 가능
![chrome-capture-2024-12-7 (3)](https://github.com/user-attachments/assets/dcb429d8-e23d-4803-a816-05583aa8fd80)

### 5. 수정 및 삭제(노트북, 공지 사항)
- 관리자 계정으로 로그인 했을 때만 가능
- 1:1 문의 수정 및 삭제는 작성한 사용자가 가능
![chrome-capture-2024-12-7 (4)](https://github.com/user-attachments/assets/b9b9f21f-80ab-47b5-85e0-2a0b855c166f)

### 6. 대여 신청(사용자)
![chrome-capture-2024-12-7 (7)](https://github.com/user-attachments/assets/ca13184a-58cb-4f6b-a25d-28e6544bad18)

### 7. 대여 신청 승인(관리자)
![chrome-capture-2024-12-7 (6)](https://github.com/user-attachments/assets/594bebd8-1400-460d-a72a-4a12f53b24c0)

### 8. 1:1 문의 답변(관리자)
![chrome-capture-2024-12-7 (10)](https://github.com/user-attachments/assets/ba241c3a-9589-4e33-b2c8-e0e1131034b5)

### 9. 마이페이지(사용자)
![chrome-capture-2024-12-7 (8)](https://github.com/user-attachments/assets/152c4785-39e8-47a7-922d-a7cc4d99c8e3)

### 10. 관리자페이지
![chrome-capture-2024-12-7 (9)](https://github.com/user-attachments/assets/4b519599-9dd1-4629-b6ad-3b18120f0f0f)

### 11. 기타
- JWT 방식을 사용하여 로그인 권한 검사
- 관리자용 페이지에는 사용자 접근 불가
- 회원가입, 게시글 작성 시 유효성 검사

# 📌 컨벤션

### 브랜치 네이밍
```
main ── feature/{작업명}
ex) feature/loginDesign
-> 카멜 형식, 직관적인 이름(영어)로 작성해주세요
```

### PR(Pull Requests) 제목
```
{브랜치 이름}: 작업 내용
ex) feature/loginDesign: 로그인 컴포넌트 제작
```

### 커밋 메시지
```
{message}: {작업 내용}
ex) feat: 로그인 기능 추가, style: 메인페이지 디자인 수정
```

| emoji              | message | description                                           |
| ------------------ | ------- | ----------------------------------------------------- |
| :sparkles:         | feat    | 새로운 기능 추가, 기존 기능을 요구 사항에 맞추어 수정 |
| :bug:              | fix     | 기능에 대한 버그 수정                                 |
| :closed_book:      | docs    | 문서(주석) 수정                                       |
| :art:              | style   | 코드 스타일, 포맷팅에 대한 수정                       |
| :recycle:          | refact  | 기능 변화가 아닌 코드 리팩터링                        |
| :white_check_mark: | test    | 테스트 코드 추가/수정                                 |
| :pushpin:          | chore   | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore    |
