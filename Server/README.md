## ✨ Structure

```
├── config
├── src
│   ├──middleware
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

## ✨ Technical Architecture

<img src=https://user-images.githubusercontent.com/103296979/184792235-0f8d5807-abe2-48ab-9f06-2b6b36ca3e05.png width="800" height="500" />
