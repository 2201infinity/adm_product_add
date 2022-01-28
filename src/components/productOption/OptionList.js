import {
  productOptionState,
  useProductOptionSetItemState,
} from "atoms/productOption";
import CustomButton from "components/common/CustomButton";
import React from "react";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import produce from "immer";
import OptionListItem from "./OptionListItem";

function OptionList({ optionSetId }) {
  const { options } = useProductOptionSetItemState(optionSetId);
  const setProductOption = useSetRecoilState(productOptionState);

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
              additionalOption: [],
            });
            break;
          }
        }
      })
    );
  };

  return (
    <OptionListContainer>
      {options.map((option) => (
        <OptionListItem optionId={option.id} />
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
