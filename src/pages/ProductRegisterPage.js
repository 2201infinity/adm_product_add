import ProductOption from "components/productOption";
import React from "react";
import styled from "styled-components";
import ProductDelivery from "components/delivery/ProductDelivery";
import CategoryPage from "./CategoryPage";

function ProductRegisterPage() {
  return (
    <ProductRegisterPageContainer>
      <ProductOption />
      <ProductDelivery />
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
