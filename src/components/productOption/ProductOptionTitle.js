import CustomButton from "components/common/CustomButton";
import React from "react";
import styled from "styled-components";
import theme from "styles/theme";
import useProductOption from "hooks/useProductOption";

function ProductOptionTitle() {
  const { onCreateOptionSet } = useProductOption();
  return (
    <OptionTitle>
      <TitleText>상품 옵션*</TitleText>
      <CustomButton
        variant="secondary"
        width={120}
        height={40}
        onClick={onCreateOptionSet}
      >
        옵션 세트 추가
      </CustomButton>
    </OptionTitle>
  );
}

const OptionTitle = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid ${theme.colors.border0};
`;

const TitleText = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export default ProductOptionTitle;
