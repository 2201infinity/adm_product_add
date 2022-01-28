import { atom, selectorFamily, useRecoilValue } from "recoil";

// const ProductOptionMocks = [
//   {
//     id: 1,
//     img: "",
//     option: [
//       {
//         id: 1,
//         name: "",
//         normalPrice: 0,
//         salePrice: 0,
//         stock: 0,
//         tax: "",
//         additionalOption: [
//           {
//             id: 1,
//             additionalName: "",
//             additionalNormalPrice: 0,
//           },
//         ],
//       },
//     ],
//   },
// ];

export const productOptionState = atom({
  key: "productOptionState",
  default: [],
});

export const productOptionSetItem = selectorFamily({
  key: "productOptionItem",
  get:
    (optionId) =>
    ({ get }) => {
      const options = get(productOptionState);
      return options.find((option) => option.id === optionId);
    },
});

export const useProductOptionSetItemState = (optionId) => {
  return useRecoilValue(productOptionSetItem(optionId));
};
