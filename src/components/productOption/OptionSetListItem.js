import React from "react";
import ImagePreviewButton from "components/common/ImagePreviewButton";
import styled from "styled-components";
import CustomButton from "components/common/CustomButton";
import OptionList from "./OptionList";
import useProductOption from "hooks/useProductOption";

function OptionSetListItem({ optionSetId }) {
  const { onDeleteOptionSet } = useProductOption();

  return (
    <OptionSetItemContainer>
      <DeleteButtonBlock>
        <CustomButton
          width={80}
          height={35}
          variant="tertiary"
          onClick={() => onDeleteOptionSet(optionSetId)}
        >
          삭제
        </CustomButton>
      </DeleteButtonBlock>

      <InnerItem>
        <ImagePreviewButton id={optionSetId} />
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
