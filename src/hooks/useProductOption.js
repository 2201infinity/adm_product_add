/* eslint-disable array-callback-return */
import { productOptionState } from "atoms/productOption";
import produce from "immer";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

export default function useProductOption() {
  const [productOption, set] = useRecoilState(productOptionState);

  // @Note 옵션 세트 추가
  const onCreateOptionSet = useCallback(() => {
    set((prevOptions) => [
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
  }, [set]);

  // @Note 옵션 세트 삭제
  const onDeleteOptionSet = useCallback(
    (optionSetId) => {
      set((prevOptions) =>
        prevOptions.filter((option) => option.id !== optionSetId)
      );
    },
    [set]
  );

  // @Note 옵션 추가
  const onCreateOption = useCallback(
    (optionSetId) => {
      set((prevOptions) =>
        produce(prevOptions, (draft) => {
          for (let i = 0; i < draft.length; i++) {
            if (draft[i].id === optionSetId) {
              draft[i].options.push({
                id: uuidv4(),
                name: "",
                normalPrice: 0,
                salePrice: 0,
                stock: 0,
                tax: "",
                additionalOptions: [],
              });
              break;
            }
          }
        })
      );
    },
    [set]
  );

  // @Note 옵션 삭제 (옵션이 1개면 해당 옵션 세트 자체를 지워주기)
  const onDeleteOption = useCallback(
    (optionSetId, optionId) => {
      const optionLength = productOption.filter(
        (option) => option.id === optionSetId
      )[0].options.length;

      if (optionLength === 1) {
        set((prevOptions) =>
          prevOptions.filter(({ id }) => id !== optionSetId)
        );
        return;
      }

      set((prevOptions) =>
        produce(prevOptions, (draft) => {
          for (let i = 0; i < draft.length; i++) {
            if (draft[i].id === optionSetId) {
              draft[i].options = draft[i].options.filter(
                (item) => item.id !== optionId
              );
              break;
            }
          }
        })
      );
    },
    [productOption, set]
  );

  // @Note 추가 옵션 생성
  const onCreateAdditionalOption = useCallback(
    (optionSetId, optionId) => {
      set((prevOptions) =>
        produce(prevOptions, (draft) => {
          for (let i = 0; i < draft.length; i++) {
            if (draft[i].id === optionSetId) {
              draft[i].options.map((item) => {
                if (item.id === optionId) {
                  item.additionalOptions.push({
                    id: uuidv4(),
                    additionalName: "",
                    additionalNormalPrice: 0,
                  });
                }
              });
              break;
            }
          }
        })
      );
    },
    [set]
  );

  // @Note 추가 옵션 상품 삭제
  const onDeleteAdditionalOption = useCallback(
    (optionSetId, optionId, additionalOptionId) => {
      set((prevOptions) =>
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
    [set]
  );

  return {
    onCreateOptionSet,
    onDeleteOptionSet,
    onCreateOption,
    onDeleteOption,
    onCreateAdditionalOption,
    onDeleteAdditionalOption,
  };
}
