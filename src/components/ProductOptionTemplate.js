import React from "react";
import styled from "styled-components";
import CustomButton from "./common/CustomButton";

function ProductOptionTemplate({ children }) {
  return (
    <OptionTemplateContainer>
      {children}
      <CustomButton variant="secondary" width={120} height={40}>
        옵션 세트 추가
      </CustomButton>
    </OptionTemplateContainer>
  );
}

const OptionTemplateContainer = styled.div`
  background-color: #f0f0f0;
  height: 100%;
`;

const OptionTitle = styled.div``;

const TitleText = styled.span``;

export default ProductOptionTemplate;
