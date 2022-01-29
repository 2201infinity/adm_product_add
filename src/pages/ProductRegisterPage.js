import ProductOption from "components/productOption";
import React from "react";
import styled from "styled-components";
import NoticeProductInfo from "components/NoticeProductInfo";
import ProductDelivery from "components/delivery/ProductDelivery";
import { ProductPeriod } from "components/period/Period";
import CustomButton from "components/common/CustomButton";
import { scrollbar } from "styles/utilsStyles";
import ProductInfo from "components/ProductInfo";
import theme from "styles/theme";
import ProductImage from "components/common/ProductImage";

function ProductRegisterPage() {
  return (
    <ProductRegisterPageContainer>
      <ProductRegisterHeader>
        <HeaderText>상품 등록</HeaderText>
        <CustomButton variant="primary" width={100} height={30}>
          저장하기
        </CustomButton>
      </ProductRegisterHeader>
      <Inner>
        <ProductPeriod />
        <ProductInfo />
        <ProductOption />
        <ProductImage header={"상품 소개 이미지"} id={1} />
        <ProductImage header={"구매자 추천 이미지"} id={2} />
        <NoticeProductInfo />
        <ProductDelivery />
      </Inner>
    </ProductRegisterPageContainer>
  );
}

const ProductRegisterPageContainer = styled.div`
  flex: 1 auto;
`;

const ProductRegisterHeader = styled.div`
  font-size: 18px;
  font-weight: 700;
  width: 1050px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 4px 20px 5px;
`;

const HeaderText = styled.span``;

const Inner = styled.div`
  border-top: 1px solid ${theme.colors.border0};
  overflow: auto;
  padding: 20px;
  width: 1050px;
  height: 90vh;
  ${scrollbar}
`;

export default ProductRegisterPage;
