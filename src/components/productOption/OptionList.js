import { productOptionState } from "atoms/productOption";
import CustomButton from "components/common/CustomButton";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import OptionListItem from "./OptionListItem";
import useProductOption from "hooks/useProductOption";

function OptionList({ optionSetId }) {
  const productOption = useRecoilValue(productOptionState);
  const option = productOption.filter((option) => option.id === optionSetId);
  const { onCreateOption } = useProductOption();

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
        onClick={() => onCreateOption(optionSetId)}
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
