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
  min-height: 100%;
  border: 1px solid ${theme.colors.border0};
  width: 850px;
`;

export default ProductOption;
