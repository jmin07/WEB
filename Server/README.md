# Server
- 기간: 2022.6.28 ~ 2022.7.26
- Back-End : 백종민

## 👉 Back-end Technical Stack

### Back-End

<img src=https://user-images.githubusercontent.com/103296979/185276261-17cde721-8df3-4241-9bb1-cd6211aea394.png width="500" height="100" />

### Infra
<img src=https://user-images.githubusercontent.com/103296979/185278285-e4fa79a6-bb1b-47cc-8d76-c03a38a59eb8.png width="500" height="100" />


## 👉 Function

### 1. 로그인 📌

### 2. 비밀번호 수정 📌

### 3. 검색 기능 📌


## 👉 Structure
```
├── config
├── src
│   ├── middleware
│   │   ├── package                    # 미들웨어 패키지 폴더
│   │   ├── verification               # 유효성, 인가, 인증 폴더
│   │   ├── express.js
│   ├── app                            # 5 Layer 폴더
│   │   ├── Auth
│   │ 	│   ├── authRoute.js
│   │ 	│   ├── authController.js
│   │ 	│   ├── authService.js
│   │ 	│   ├── authProvider.js
│   │ 	│   ├── authDao.js
│   │   ├── commonDao                 # 공통 Dao 폴더
│   │   ├── Crawling
│   │   ├── Mail
│   │   ├── Trace
│   ├── package-lock.json
│   ├── package.json
└─  ├── app.js
```

## 👉 Technical Architecture
<img src=https://user-images.githubusercontent.com/103296979/185278494-d134cdc4-083c-413e-99ba-5cfae184641c.png width="900" height="500" />
