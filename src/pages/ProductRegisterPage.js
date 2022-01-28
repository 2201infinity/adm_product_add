import ProductOption from "components/ProductOption";
import React from "react";
import styled from "styled-components";
import ProductDelivery from "components/ProductDelivery";

function ProductRegisterPage() {
  return (
    <ProductRegisterPageContainer>
      <ProductOption />
      <ProductDelivery />
    </ProductRegisterPageContainer>
  );
}

const ProductRegisterPageContainer = styled.div`
  flex: 1 auto;
  overflow: auto;
  padding: 20px;
`;

export default ProductRegisterPage;
