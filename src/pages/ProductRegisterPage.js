import ProductOption from "components/ProductOption";
import React from "react";
import styled from "styled-components";
import NoticeProductInfo from "components/NoticeProductInfo";

function ProductRegisterPage() {
  return (
    <ProductRegisterPageContainer>
      <ProductOption />
      <NoticeProductInfo />
    </ProductRegisterPageContainer>
  );
}

const ProductRegisterPageContainer = styled.div`
  flex: 1 auto;
  overflow: auto;
  padding: 20px;
`;

export default ProductRegisterPage;
