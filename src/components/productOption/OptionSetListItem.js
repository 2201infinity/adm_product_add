import {
  productOptionState,
  useProductOptionSetItemState,
} from "atoms/productOption";
import React from "react";
import ImagePreviewButton from "components/common/ImagePreviewButton";
import styled from "styled-components";
import CustomButton from "components/common/CustomButton";
import { useSetRecoilState } from "recoil";
import OptionList from "./OptionList";

function OptionSetListItem({ optionSetId }) {
  const setProductOption = useSetRecoilState(productOptionState);
  const optionItem = useProductOptionSetItemState(optionSetId);

  const onDeleteOptionSet = () => {
    setProductOption((prevOptions) =>
      prevOptions.filter((option) => option.id !== optionSetId)
    );
  };

  return (
    <OptionSetItemContainer>
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
        <OptionList optionSetId={optionSetId} />
      </InnerItem>
    </OptionSetItemContainer>
  );
}

const OptionSetItemContainer = styled.div`
  margin: 10px 0 40px;
`;

const DeleteButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const InnerItem = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 500px;
  padding: 10px;
  border-radius: 6px;
`;

export default OptionSetListItem;
