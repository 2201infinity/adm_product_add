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
  background-color: #f0f0f0;
  height: 100%;
  border: 1px solid ${theme.colors.border0};
`;

export default ProductOption;
