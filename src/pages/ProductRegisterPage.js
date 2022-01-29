import ProductOption from "components/productOption";
import React, { useEffect } from "react";
import styled from "styled-components";
import NoticeProductInfo from "components/NoticeProductInfo";
import ProductDelivery from "components/delivery/ProductDelivery";
import { ProductPeriod } from "components/period/Period";
import CustomButton from "components/common/CustomButton";
import { scrollbar } from "styles/utilsStyles";
import ProductInfo from "components/ProductInfo";
import theme from "styles/theme";
import { useRecoilValue } from "recoil";
import { productRequiredInfoState } from "atoms/productRequiredInfo";

function ProductRegisterPage() {
  const productRequired = useRecoilValue(productRequiredInfoState);

  const onRegisterProduct = () => {
    if (productRequired.productOption && productRequired.productInfo) {
      alert("상품 등록이 완료되었습니다.");
    } else {
      alert("필수값을 모두 입력해 주세요.");
    }
  };

  useEffect(() => {
    console.log("productRequired", productRequired);
  }, [productRequired]);

  return (
    <ProductRegisterPageContainer>
      <ProductRegisterHeader>
        <HeaderText>상품 등록</HeaderText>
        <CustomButton
          variant="primary"
          width={100}
          height={30}
          onClick={onRegisterProduct}
        >
          저장하기
        </CustomButton>
      </ProductRegisterHeader>
      <Inner>
        <ProductPeriod />
        <ProductInfo />
        <ProductOption />
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
