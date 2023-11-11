# ✨ Express Template

-   본 내용은 **코드를 제외한** 여러 사용자들의 템플릿 구조를 결합하여 재구성 했습니다.
-   어떤 구조가 정답이라고 할 수는 없지만 최대한 사용하기 편리한 방향으로 계속 개선하겠습니다.

## 🙏 Contributor

GitHub 에 코드를 공유해주시는 여러 분들과 구조를 제공해주신 코스타 💖**cpp 조의 백엔드 분들**💖께 감사드립니다.

## 🔥 5 Layer Architecture

-   기본적으로 비즈니스 로직을 분리하는 것을 목적
    -   Controller, Service Layer , Data Access Layer 라는 세개의 층으로 나뉜다.
-   본 Template 은 다섯개 층으로 구성했습니다.
    1. controller는 client와의 통신에서 필요한 req, res를 다루는 부분
        - └── **Route, Controller** 로 두 계층으로 나눴습니다.
    2. service layer은 business logic 처리
        - 서비스 로직을 처리하는 부분으로 **req와 res 를 사용하면 안 됩니다.**
    3. Data Access Layer 는 데이터 베이스 처리
        - └── **Provider, Dao** 로 두 계층으로 나눴습니다.

## 🔥 Structure

```
├── config                          # 환경설정 폴더
├── src
│   ├── app                         # 앱 계층 폴더
│   │   ├── Route
│   │   ├── Controller
│   │   ├── Service
│   │   ├── provider
│   │   ├── dao
│   ├── middleware
│   │   ├── verification            # 검증 폴더
│   │ 	│   ├── authentication
│   │ 	│   ├── authorization
│   │ 	│   ├── validation
│   │   ├── package            	    # 미들웨어 패키지 폴더
│   ├── test                        # 테스트 개발 폴더
│   │   ├── integration
│   │   ├── unit
├── .gitignore
├── .env
└── app.js
```

## 🔥 수정 사항

1. 기본 코드 추가
    - config 와 middleware 확실하게 분리

-   winston: log 기록
-   jsconfig.json: 경로 설정
-   cross-env: 단축키 설정
