# ✨ Express Template

여러 사용자들의 템플릿을 결합하여 재구성 했습니다.

## 🙏 Contributor

GitHub 에 코드를 공유해주시는 여러 분들과 구조를 제공해주신 코스타 💖**cpp 조의 백엔드 분들**💖께 감사드립니다.

## 🔥 5 Layer Architecture

기본적으로 비즈니스 로직을 분리하는 것을 목적으로 하며 Controller, Service Layer , Data Access Layer 라는 세개의 층으로 나뉜다.

1. controller는 client와의 통신에서 필요한 req, res를 다루는 부분
    - └── Route, Controller 로 두 계층으로 나눴습니다.
2. service layer은 business logic 처리
    - 서비스 로직을 처리하는 부분으로 **req와 res 를 사용하면 안 됩니다.**
3. Data Access Layer 는 데이터 베이스 처리
    - └── Provider, Dao 로 두 계층으로 나눴습니다.
    - └── 많이 세분화 하는 부분이 있어 적절하게 사용하면 될 것 같습니다.

## 🔥 Structure

개인에 따라 구성을 변경하여 사용할 수 있습니다.

```
├── config                          # 환경설정 폴더
│   ├── log
├── src
│   ├── app                         # 앱에 대한 코드
│   │   ├── User
│   │ 	│   ├── userRoute.js
│   │ 	│   ├── userController.js
│   │ 	│   ├── userService.js
│   │ 	│   ├── userProvider.js
│   │ 	│   ├── userDao.js
│   ├── middleware                  # 미들웨어
│   │   ├── verification            # 검증 폴더
│   │ 	│   ├── authentication
│   │ 	│   ├── authorization
│   │ 	│   ├── validation
│   │   ├── package            	    # User 폴더
│   │ 	│   ├── passport
├── .gitignore                      # git 에 포함되지 않아야 하는 폴더, 파일들을 작성 해놓는 곳
├── .env                            #
└── app.js                          #
```

## 🔥 수정 필요 사항

> 계속 수정 작업 진행 중입니다:)

### 1. 환경설정

1. winston: log 기록
2. jsconfig.json: 경로 설정
3. cross-env: 단축키 설정

### 2. 코드수정

1. res.send 수정(response)
2. 예제 코드 추가 작업
3. DB env 수정 필요
4. 공통 Router 적용
