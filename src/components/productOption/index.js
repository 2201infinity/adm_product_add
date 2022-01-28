import React from "react";
import styled from "styled-components";
import theme from "styles/theme";
import ProductOptionTitle from "./ProductOptionTitle";

/**
 * @param {React.ReactNode} children
 */

function ProductOption({ children }) {
  return (
    <ProductOptionContainer>
      <ProductOptionTitle />
      {children}
    </ProductOptionContainer>
  );
}

const ProductOptionContainer = styled.div`
  background-color: #f0f0f0;
  height: 100%;
  border: 1px solid ${theme.colors.border0};
`;

export default ProductOption;
