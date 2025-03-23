import { atom } from "recoil";

export const paramsState = atom({
  key: "paramsState",
  default: {
    searchValue: "photos",
    lang: "ko",
    per_page: 30,
    order_by: "relevant",
  },
});
