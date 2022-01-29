import { atom } from "recoil";

export const productOptionState = atom({
  key: "productOptionState",
  default: [],
});

export const productRegisterFormState = atom({
  key: "productRegisterFormState",
  default: {
    상품노출기한: "제한 없음",
    상품판매기한: "제한 없음",
    카테고리: [],
    필터태그: [],
    상품명: "",
    상품구성소개정보: "",
    상품썸네일: "",
    상품대표이미지: "",
    상품소개이미지: [],
    구매자추천이미지: [],
    상품배송설정: {
      사용자배송일출발일지정: false,
      방문수령: false,
      선주문예약배송: false,
    },
    마일리지적립: false,
    감사카드제공: false,
  },
});
