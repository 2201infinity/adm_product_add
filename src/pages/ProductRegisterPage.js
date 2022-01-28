import ProductOption from "components/ProductOption";
import React from "react";
import styled from "styled-components";
import CategoryPage from "./CategoryPage";

function ProductRegisterPage() {
  return (
    <ProductRegisterPageContainer>
      <ProductOption />
      <CategoryPage />
    </ProductRegisterPageContainer>
  );
}

const ProductRegisterPageContainer = styled.div`
  flex: 1 auto;
  overflow: auto;
  padding: 20px;
`;

export default ProductRegisterPage;
