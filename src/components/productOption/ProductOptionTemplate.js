import CustomButton from "components/common/CustomButton";
import React from "react";
import styled from "styled-components";
import theme from "styles/theme";

/**
 * @param {React.ReactNode} children
 */

function ProductOptionTemplate({ children }) {
  return (
    <OptionTemplateContainer>
      <OptionTitle>
        <TitleText>상품 옵션*</TitleText>
        <CustomButton variant="secondary" width={120} height={40}>
          옵션 세트 추가
        </CustomButton>
      </OptionTitle>
      {children}
    </OptionTemplateContainer>
  );
}

const OptionTemplateContainer = styled.div`
  background-color: #f0f0f0;
  height: 100%;
  border: 1px solid ${theme.colors.border0};
`;

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

export default ProductOptionTemplate;
