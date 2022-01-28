import ProductOption from "components/productOption";
import React from "react";
import styled from "styled-components";

function ProductRegisterPage() {
  return (
    <ProductRegisterPageContainer>
      <ProductOption />
    </ProductRegisterPageContainer>
  );
}

const ProductRegisterPageContainer = styled.div`
  flex: 1 auto;
  overflow: auto;
  padding: 20px;
`;

export default ProductRegisterPage;
