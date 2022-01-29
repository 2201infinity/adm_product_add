import { atom } from "recoil";

export const productRequiredInfoState = atom({
  key: "productRequiredInfoState",
  default: {
    productInfo: false,
    productOption: false,
    productCategory: false,
  },
});
