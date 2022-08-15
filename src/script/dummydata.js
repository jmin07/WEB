const dummydata = [
  {
    Classification: "디지털기기",
    IDX: 9285,
    Local: "역삼1동",
    Nickname: "우겨봐",
    Price: "100,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "38.0",
    Title: "1. apple 구형 (G3/G4/G5) 마우스 팔아욧! *^^*",
    URL: "https://www.daangn.com/articles/14085",
    UpdateTime: "20220718080930",
  },
  {
    Classification: "여성의류",
    IDX: 13809,
    Local: "일원2동",
    Nickname: "미씨즈박",
    Price: "5,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "59.2",
    Title: "2. 올리브 미키마우스 맨투맨 티",
    URL: "https://www.daangn.com/articles/35467",
    UpdateTime: "20220718130822",
  },
  {
    Classification: "디지털기기",
    IDX: 46718,
    Local: "역삼동",
    Nickname: "어쩔수없는파트라슈",
    Price: "12,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "49.5",
    Title: "3. 밥패드 마우스 키보드 게이밍 장패드 자이언트",
    URL: "https://www.daangn.com/articles/431728139",
    UpdateTime: "20220719021329",
  },
  {
    Classification: "남성패션/잡화",
    IDX: 55289,
    Local: "압구정동",
    Nickname: "bbyy",
    Price: "50,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "40.2",
    Title: "4. 라우드 마우스 남자 골프 반바지 loud mouth",
    URL: "https://www.daangn.com/articles/431739928",
    UpdateTime: "20220719030433",
  },
  {
    Classification: "디지털기기",
    IDX: 56909,
    Local: "역삼2동",
    Nickname: "Oiamtw",
    Price: "10,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "37.1",
    Title: "5. 삼성 블루투스 키보드 마우스",
    URL: "https://www.daangn.com/articles/431742178",
    UpdateTime: "20220719031419",
  },
  {
    Classification: "디지털기기",
    IDX: 56909,
    Local: "역삼2동",
    Nickname: "Oiamtw",
    Price: "10,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "37.1",
    Title: "6. 삼성 블루투스 키보드 마우스",
    URL: "https://www.daangn.com/articles/431742178",
    UpdateTime: "20220719031419",
  },
  {
    Classification: "디지털기기",
    IDX: 57210,
    Local: "역삼2동",
    Nickname: "Oiamtw",
    Price: "5,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "37.1",
    Title: "7. 무선충전 마우스패드",
    URL: "https://www.daangn.com/articles/431742588",
    UpdateTime: "20220719031602",
  },
  {
    Classification: "디지털기기",
    IDX: 57395,
    Local: "역삼2동",
    Nickname: "Oiamtw",
    Price: "5,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "37.1",
    Title: "8. 무산 충전 마우스패드",
    URL: "https://www.daangn.com/articles/431742843",
    UpdateTime: "20220719031704",
  },
  {
    Classification: "디지털기기",
    IDX: 60854,
    Local: "신사동",
    Nickname: "도룡뇽",
    Price: "60,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "41.6",
    Title: "9. 매직마우스 2세대 풀박스",
    URL: "https://www.daangn.com/articles/431747569",
    UpdateTime: "20220719033655",
  },
  {
    Classification: "디지털기기",
    IDX: 61238,
    Local: "도곡동",
    Nickname: "지브라",
    Price: "50,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "36.6",
    Title: "10. 애플 매직마우스",
    URL: "https://www.daangn.com/articles/431748089",
    UpdateTime: "20220719033909",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "10,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "36.9",
    Title: "11. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "12,000원",
    Province: "고창군",
    Region: "전북",
    Temperature: "36.9",
    Title: "12. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "18,000원",
    Province: "강진군",
    Region: "전남",
    Temperature: "36.9",
    Title: "13. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "20,000원",
    Province: "경산시",
    Region: "경북",
    Temperature: "36.9",
    Title: "14. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "40,000원",
    Province: "거제시",
    Region: "경남",
    Temperature: "36.9",
    Title: "15. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "나눔",
    Province: "서귀포시",
    Region: "제주",
    Temperature: "36.9",
    Title: "16. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "나눔",
    Province: "강진군",
    Region: "전남",
    Temperature: "36.9",
    Title: "13. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "나눔",
    Province: "경산시",
    Region: "경북",
    Temperature: "36.9",
    Title: "14. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "나눔",
    Province: "거제시",
    Region: "경남",
    Temperature: "36.9",
    Title: "15. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "1원",
    Province: "서귀포시",
    Region: "제주",
    Temperature: "36.9",
    Title: "16. 로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "디지털기기",
    IDX: 9285,
    Local: "역삼1동",
    Nickname: "우겨봐",
    Price: "100,000원",
    Province: "강남구",
    Region: "서울",
    Temperature: "38.0",
    Title: "apple 구형 (G3/G4/G5) 마우스 팔아욧! *^^*",
    URL: "https://www.daangn.com/articles/14085",
    UpdateTime: "20220718080930",
  },
  {
    Classification: "여성의류",
    IDX: 13809,
    Local: "일원2동",
    Nickname: "미씨즈박",
    Price: "5,000원",
    Province: "금청구",
    Region: "부산",
    Temperature: "59.2",
    Title: "올리브 미키마우스 맨투맨 티",
    URL: "https://www.daangn.com/articles/35467",
    UpdateTime: "20220718130822",
  },
  {
    Classification: "디지털기기",
    IDX: 46718,
    Local: "역삼동",
    Nickname: "어쩔수없는파트라슈",
    Price: "12,000원",
    Province: "남구",
    Region: "대구",
    Temperature: "49.5",
    Title: "밥패드 마우스 키보드 게이밍 장패드 자이언트",
    URL: "https://www.daangn.com/articles/431728139",
    UpdateTime: "20220719021329",
  },
  {
    Classification: "남성패션/잡화",
    IDX: 55289,
    Local: "압구정동",
    Nickname: "bbyy",
    Price: "50,000원",
    Province: "강화군",
    Region: "인천",
    Temperature: "40.2",
    Title: "라우드 마우스 남자 골프 반바지 loud mouth",
    URL: "https://www.daangn.com/articles/431739928",
    UpdateTime: "20220719030433",
  },
  {
    Classification: "디지털기기",
    IDX: 56909,
    Local: "역삼2동",
    Nickname: "Oiamtw",
    Price: "10,000원",
    Province: "광산구",
    Region: "광주",
    Temperature: "37.1",
    Title: "삼성 블루투스 키보드 마우스",
    URL: "https://www.daangn.com/articles/431742178",
    UpdateTime: "20220719031419",
  },
  {
    Classification: "디지털기기",
    IDX: 56909,
    Local: "역삼2동",
    Nickname: "Oiamtw",
    Price: "10,000원",
    Province: "대덕수",
    Region: "대전",
    Temperature: "37.1",
    Title: "삼성 블루투스 키보드 마우스",
    URL: "https://www.daangn.com/articles/431742178",
    UpdateTime: "20220719031419",
  },
  {
    Classification: "디지털기기",
    IDX: 57210,
    Local: "역삼2동",
    Nickname: "Oiamtw",
    Price: "5,000원",
    Province: "동구",
    Region: "울산",
    Temperature: "37.1",
    Title: "무선충전 마우스패드",
    URL: "https://www.daangn.com/articles/431742588",
    UpdateTime: "20220719031602",
  },
  {
    Classification: "디지털기기",
    IDX: 57395,
    Local: "역삼2동",
    Nickname: "Oiamtw",
    Price: "5,000원",
    Province: "가람동",
    Region: "세종",
    Temperature: "37.1",
    Title: "무산 충전 마우스패드",
    URL: "https://www.daangn.com/articles/431742843",
    UpdateTime: "20220719031704",
  },
  {
    Classification: "디지털기기",
    IDX: 60854,
    Local: "신사동",
    Nickname: "도룡뇽",
    Price: "60,000원",
    Province: "구리시",
    Region: "경기",
    Temperature: "41.6",
    Title: "매직마우스 2세대 풀박스",
    URL: "https://www.daangn.com/articles/431747569",
    UpdateTime: "20220719033655",
  },
  {
    Classification: "디지털기기",
    IDX: 61238,
    Local: "도곡동",
    Nickname: "지브라",
    Price: "50,000원",
    Province: "강릉시",
    Region: "강원",
    Temperature: "36.6",
    Title: "애플 매직마우스",
    URL: "https://www.daangn.com/articles/431748089",
    UpdateTime: "20220719033909",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "10,000원",
    Province: "괴산군",
    Region: "충북",
    Temperature: "36.9",
    Title: "로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "15,000원",
    Province: "계룡시",
    Region: "충남",
    Temperature: "36.9",
    Title: "로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "12,000원",
    Province: "고창군",
    Region: "전북",
    Temperature: "36.9",
    Title: "로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "18,000원",
    Province: "강진군",
    Region: "전남",
    Temperature: "36.9",
    Title: "로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "20,000원",
    Province: "경산시",
    Region: "경북",
    Temperature: "36.9",
    Title: "로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "40,000원",
    Province: "거제시",
    Region: "경남",
    Temperature: "36.9",
    Title: "로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
  {
    Classification: "게임/취미",
    IDX: 84920,
    Local: "대치동",
    Nickname: "땅구땅",
    Price: "9,000원",
    Province: "서귀포시",
    Region: "제주",
    Temperature: "36.9",
    Title: "로지텍 g102 마우스 판매합니다",
    URL: "https://www.daangn.com/articles/431780696",
    UpdateTime: "20220719114227",
  },
];

export { dummydata };
