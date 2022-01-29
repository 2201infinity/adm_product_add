/* eslint-disable array-callback-return */
import { productOptionState } from "atoms/productOption";
import produce from "immer";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

export default function useProductOption() {
  const [productOption, setProductOption] = useRecoilState(productOptionState);

  /**
   * @returns 옵션 세트 추가
   */
  const onCreateOptionSet = useCallback(() => {
    setProductOption((prevOptions) => [
      ...prevOptions,
      {
        id: uuidv4(),
        img: "",
        options: [
          {
            id: uuidv4(),
            name: "",
            normalPrice: 0,
            salePrice: 0,
            stock: 0,
            tax: "",
            additionalOptions: [],
          },
        ],
      },
    ]);
  }, [setProductOption]);

  /**
   * @param {string} optionSetId 옵션 세트 id
   * @param {string} optionId 옵션 id
   * @param {string} additionalOptionId 추가 옵션 id
   * @returns 추가 옵션 상품 삭제
   */
  const onDeleteAdditionalOption = useCallback(
    (optionSetId, optionId, additionalOptionId) => {
      setProductOption((prevOptions) =>
        produce(prevOptions, (draft) => {
          for (let i = 0; i < draft.length; i++) {
            if (draft[i].id === optionSetId) {
              draft[i].options.map((item) => {
                if (item.id === optionId) {
                  item.additionalOptions = item.additionalOptions.filter(
                    (additionalOption) =>
                      additionalOption.id !== additionalOptionId
                  );
                }
              });
              break;
            }
          }
        })
      );
    },
    []
  );

  return {
    onCreateOptionSet,
    onDeleteAdditionalOption,
  };
}
