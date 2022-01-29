import React from "react";
import styled from "styled-components";
import theme from "styles/theme";
import Category from "./common/category/Category";
import FilterTag from "./common/category/FilterTag";
import ProductNameImage from "./common/category/ProductNameImage";

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
