import { productOptionState } from "atoms/productOption";
import CustomButton from "components/common/CustomButton";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import theme from "styles/theme";

function ProductOptionTitle() {
  const setProductOption = useSetRecoilState(productOptionState);

  const onCreateOptionSet = () => {
    setProductOption((prevOptions) => [
      ...prevOptions,
      {
        id: uuidv4(),
        img: "",
        options: [
          {
            id: uuidv4(),
            name: "",
            normalPrice: 0,
            salePrice: 0,
            stock: 0,
            tax: "",
            additionalOptions: [],
          },
        ],
      },
    ]);
  };

  return (
    <OptionTitle>
      <TitleText>상품 옵션*</TitleText>
      <CustomButton
        variant="secondary"
        width={120}
        height={40}
        onClick={onCreateOptionSet}
      >
        옵션 세트 추가
      </CustomButton>
    </OptionTitle>
  );
}

const OptionTitle = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid ${theme.colors.border0};
`;

const TitleText = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export default ProductOptionTitle;
