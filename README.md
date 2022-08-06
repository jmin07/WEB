# 🐰 [WatchRabbit](https:/www.watchrabbit.co.kr)

## What is WatchRabbit?
![WatchRabbit](https://user-images.githubusercontent.com/103296979/178128427-e9cf21f0-8deb-4fc1-bae6-2c55e5804c8f.png)

**WatchRabbit** 은 중고거래 플랫폼 '당근마켓' 의 중고물품 게시글을 항상 감시하여 사용자들에게 더 나은 정보를 제공하는 서비스입니다.

## ✨ WatchRabbit Agent Members

1. 홍 Agent
    - 역할: PM 및 크롤링 담당
    - GitHub: https://github.com/ghdtkdbs12
    
2. 백 Agent
    - 역할: 백엔드 담당
    - GitHub: https://github.com/jmin07
    
3. 박 Agent
    - 역할: 프론트 담당
    - GitHub: https://github.com/PGjun

## ✨ WatchRabbit의 의미
- WatchRabbit은 정치학에서 사용되는 권력의 감시자인 "Watch Dogs"에서 따온 말입니다. 권력을 감시하는 감시자들을 일컫는 말
- WatchRabbit은 당근마켓의 아이콘인 당근을 감시하고 이를 보고한다는 느낌을 주기 위해서 WatchRabbit으로 만들었습니다.
- WatchRabbit의 캐릭터는 Agent.Rabbit인데 토끼의 얼굴에 요원처럼 보일 수 있도록 선글라스와 나비넥타이를 추가하여 전형적인 영국 첩보원, 경호업체의 느낌을 살렸습니다.

## ✨ WatchRabbit 의 목표
- 중고거래는 다양한 형태, 다양한 상태의 물건이 제각기 판매되고 있어서 가격이 변동됩니다.
- 판매자는 너무 저렴한 가격에 팔고 싶지 않고, 구매자는 너무 비싼 가격에 사고 싶지 않다면 거래 참여자들은 적절하고, 합리적인 가격을 알고 싶어 할 수 있습니다.
- 홈페이지 사용자가 요청할시 DB의 내용을 토대로 원하는 정보 안내하여주고 기존 정보를 가공하여 거래의 과거 추세와 미래 추세를 볼 수 있게 하려고합니다.

## ✨ WatchRabbit의 기능
1. 정해진 시간마다 중고거래플랫폼 '당근마켓'의 게시글들을 웹크롤링하여 DB에 저장합니다.
2. 저장된 정보를 검색할 수 있으며 원하는 정보(관련 제품의 게시글의 수, 최저가격, 평균가격, 최고가격, 판매지역 등)를 볼 수 있습니다.
3. 누적된 정보를 바탕으로 서버가 분석하여 그래프로 과거의 정보와 미래 예측되는 정보 데이터를 그래프로 한 눈에 보여줍니다.
4. 원하는 제품의 지역, 최저가격, 최대가격 등 조건을 지정하여 감시 기능을 켜놓으면 메일을 통하여 해당 제품이 신규 등록이 되거나 변동이 있는지 알림을 줍니다.

## ✨ Structure

```
├── config                         
│   ├── email_HTML                 # 이메일 양식
│   ├── logs                       # 로그 기록
│   │   ├── error
│   │   ├── info
│   ├── response                   # 응답 메세지 
│   │   ├── response.js
│   │   ├── responseStatus.js
├── middleware                      #           			
│   ├── Database                    #
│   ├── logg
│   ├── LoginCheck 
│   ├── mail
│   ├── passport
│   │   ├── index.js
│   │   ├── localStrategy.js
│   │   ├── googleStrategy.js
│   │   ├── kakaoStrategy.js
│   ├── Validator                    #
│   │   ├── validator.js
│   ├── express.js                    #
├── src
│   ├── Routes
│   │   ├── commonDao 
│   │ 	│   ├── commonDao.js
│   │   ├── Auth
│   │ 	│   ├── authRoute.js
│   │ 	│   ├── authController.js
│   │ 	│   ├── authService.js
│   │ 	│   ├── authProvider.js
│   │ 	│   ├── authDao.js
│   │   ├── Crawling
│   │   ├── Mail
│   │   ├── Trace
│   ├── .gitignore              # git 에 포함되지 않아야 하는 폴더
│   ├── package-lock.json        
│   ├── package.json 
└─  ├── app.js
```


## ✨ Technical Architecture
<img src=https://user-images.githubusercontent.com/103296979/182494735-009aacc8-0e6b-4093-8b1a-3f25de79f777.svg width="800" height="500" />
