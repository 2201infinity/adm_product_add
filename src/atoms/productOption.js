import { atom, selectorFamily, useRecoilValue } from "recoil";

// const ProductOptionMocks = [
//   {
//     id: 1,
//     img: "",
//     options: [
//       {
//         id: 1,
//         name: "",
//         normalPrice: 0,
//         salePrice: 0,
//         stock: 0,
//         tax: "",
//         additionalOptions: [
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
