import React from "react";
import styled from "styled-components";
import theme from "styles/theme";
import ProductOptionContent from "./ProductOptionContent";
import ProductOptionTitle from "./ProductOptionTitle";

function ProductOption() {
  return (
    <ProductOptionContainer>
      <ProductOptionTitle />
      <ProductOptionContent />
    </ProductOptionContainer>
  );
}

const ProductOptionContainer = styled.div`
  margin-top: 40px;
  min-height: 100%;
  border: 1px solid ${theme.colors.border1};
`;

export default ProductOption;
