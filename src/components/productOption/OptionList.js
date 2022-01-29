import {
  productOptionState,
  useProductOptionSetItemState,
} from "atoms/productOption";
import CustomButton from "components/common/CustomButton";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import produce from "immer";
import OptionListItem from "./OptionListItem";

function OptionList({ optionSetId }) {
  const [productOption, setProductOption] = useRecoilState(productOptionState);
  const option = productOption.filter((option) => option.id === optionSetId);

  const onCreateOption = () => {
    setProductOption((prevOptions) =>
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
  };

  return (
    <OptionListContainer>
      {option[0].options.map((option) => (
        <OptionListItem
          optionSetId={optionSetId}
          optionId={option.id}
          key={option.id}
        />
      ))}

      <CreateOptionButton
        width={80}
        height={45}
        variant="secondary"
        onClick={onCreateOption}
      >
        옵션 추가
      </CreateOptionButton>
    </OptionListContainer>
  );
}

const OptionListContainer = styled.div``;

const CreateOptionButton = styled(CustomButton)`
  width: 100%;
`;

export default OptionList;
