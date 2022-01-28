import {
  productOptionState,
  useProductOptionItemState,
} from "atoms/productOption";
import React from "react";
import ImagePreviewButton from "components/common/ImagePreviewButton";
import styled from "styled-components";
import CustomButton from "components/common/CustomButton";
import { useSetRecoilState } from "recoil";

function OptionSetListItem({ optionId }) {
  const setProductOption = useSetRecoilState(productOptionState);
  const optionItem = useProductOptionItemState(optionId);
  console.log(optionItem);

  const onDeleteOptionSet = () => {
    setProductOption((prevOptions) =>
      prevOptions.filter((option) => option.id !== optionId)
    );
  };

  return (
    <OptionItemContainer>
      <DeleteButtonBlock>
        <CustomButton
          width={80}
          height={35}
          variant="tertiary"
          onClick={onDeleteOptionSet}
        >
          삭제
        </CustomButton>
      </DeleteButtonBlock>

      <InnerItem>
        <ImagePreviewButton />
        {optionId}
      </InnerItem>
    </OptionItemContainer>
  );
}

const OptionItemContainer = styled.div``;

const DeleteButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const InnerItem = styled.div`
  background-color: #fff;
  width: 100%;
  height: 500px;
  padding: 10px;
  border-radius: 6px;
`;

export default OptionSetListItem;
