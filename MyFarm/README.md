# [MyFarm]([https://www.notion.so/MyFarm-bcf01ee87dc24a9e9652cdc9f1f3eb8f?pvs=4](https://quark-trust-668.notion.site/MyFarm-bcf01ee87dc24a9e9652cdc9f1f3eb8f?pvs=4))

## Waht is MyFarm?
농산물 관리 서비스를 제공하는 플랫폼 입니다.

## 🍓 MyFarm Members
1. 👨‍🌾 백 farmer
- 역할: 백엔드 && 프론트
- GitHub: https://github.com/jmin07
- Blog: [https://jm-baek.tistory.com/](https://jm-baek.tistory.com/)

## 🍓 MyFarm 의 주요 서비스
1. 농산물 시세 알림 서비스
   - 도매 시장별 가격 정보 제공
2. 농산물 재고 관리 서비스
   - 생산량 기록을 분석 및 재고 관리
3. 기상 정보 알림 서비스
4. 회원들 간의 통 공간 서비스
   - SNS와 같은 기능

## 🍓 MyFarm 기술 분석
1. Project Structure </br>
   Client ← (DTO/Val) → Controller ↔ Service ↔ Repository ↔ Mapper ↔ database(?) </br>
   - 모든 구간 마다 DTO를 통해 데이터를 전달 받음.
   - 단, Client와 Controller 사이에는 Validation 이 있을 수 있음.