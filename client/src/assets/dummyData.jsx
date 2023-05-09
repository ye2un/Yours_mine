import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";

export const dummyImages = [img1, img2, img3];

export const dummyBiddings = [
  {
    id: 1,
    img: img4,
    itemTitle: "아이앱 티셔츠 그레이멜란지",
    itemContent:
      "구매 후 두 번 입고 세탁한 뒤에 1년 동안 보관만 했습니다. 새 것 같은 컨디션이에여",
  },
  {
    id: 2,
    img: img6,
    itemTitle: "애플워치 6 스테인리스 실버",
    itemContent: "실사용 2년 정도고 잔기스 외에는 문제없습니다~~",
  },
  {
    id: 3,
    img: img5,
    itemTitle: "맥북 에어m1",
    itemContent:
      "액정이 고장나서 화면은 안나오지만 기능은 정상 작동합니다! 크렘쉘 모드로 사용하시면 돼요 ㅎㅎㅎ",
  },
];

export const dummyAuctions = {
  userName: "당근단군",
  userLocation: "군자동",
  userImg: img2,
  auctionTitle: "나이키 에어조던1 스캇 팬텀블랙 265",
  auctionTime: "50분 전",
  content:
    "나이키 공홈에서 당첨된 나이키 에어조던1 스캇입니다!\n사진 찍기 위하여 보자기만 걷어봤고 그 외에는 시착도 안 했습니다.\n건대입구에서 직거래 희망합니다!",
  auctionSummary: "입찰 3 ・ 관심 1 ・ 조회 146",
  auctionEnd: "2023년 5월 15일 오후 5시 26분",
};

export const dummyItem = [
  {
    id: 1,
    title: "샤넬 백 교환해용!",
    period: "2023.05.01 ~ 2023.05.15",
    bidding: 5,
    auctionState: true,
    heart: 5,
    img: img1,
  },
  {
    id: 2,
    title: "루이비통 운동화",
    period: "2023.05.01 ~ 2023.05.15",
    bidding: 5,
    auctionState: false,
    heart: 3,
    img: img2,
  },
  {
    id: 3,
    title: "냉동 피자 하와이안",
    period: "2023.05.01 ~ 2023.05.8",
    bidding: 1,
    auctionState: false,
    heart: 2,
    img: img3,
  },
];
