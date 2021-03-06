import React from "react";
import styled from "styled-components";
import theme from "styles/theme";
import Category from "./Category";
import FilterTag from "./FilterTag";
import ProductNameImage from "./ProductNameImage";

function ProductInfo() {
  return (
    <ProductInfoContainer>
      <Category />
      <FilterTag />
      <ProductNameImage />
    </ProductInfoContainer>
  );
}

const ProductInfoContainer = styled.div`
  border: 1px solid ${theme.colors.border1};
`;

export default ProductInfo;
