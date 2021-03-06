import { productOptionState } from "atoms/productOption";
import CustomButton from "components/common/CustomButton";
import Input from "components/common/Input";
import React, { useEffect, useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import theme from "styles/theme";
import AdditionalOptionList from "./AdditionalOptionList";
import useProductOption from "hooks/useProductOption";
import useInput from "hooks/useInput";
import { productRequiredInfoState } from "atoms/productRequiredInfo";

function OptionListItem({ optionSetId, optionId }) {
  const productOption = useRecoilValue(productOptionState);
  const [normalPrice, onChangeNormalPrice] = useInput();
  const [salePrice, onChangeSalePrice] = useInput();
  const [optionName, onChangeOptionName] = useInput();
  const [productStock, onChangeProductStock] = useInput();
  const { onDeleteOption, onCreateAdditionalOption } = useProductOption();
  const setProductRequried = useSetRecoilState(productRequiredInfoState);

  const option = productOption
    .filter((option) => option.id === optionSetId)
    .map((option) => option.options.filter((option) => option.id === optionId));

  const additionalOptionList = option[0][0].additionalOptions;

  const discountRate = useMemo(
    () => Math.floor(((normalPrice - salePrice) / normalPrice) * 100),
    [normalPrice, salePrice]
  );

  const discountRateElement = () => {
    if (Number(salePrice) >= Number(normalPrice) || !salePrice)
      return <>없음</>;

    return <>{discountRate}%</>;
  };

  useEffect(() => {
    if (
      productOption.length === 0 ||
      optionName.length === 0 ||
      !normalPrice ||
      !salePrice ||
      !productStock
    ) {
      setProductRequried((prev) => ({ ...prev, productOption: false }));
    } else {
      setProductRequried((prev) => ({ ...prev, productOption: true }));
    }
  }, [
    productOption,
    setProductRequried,
    optionName,
    normalPrice,
    salePrice,
    productStock,
  ]);

  return (
    <OptionItemContainer>
      <DeleteButtonBlock>
        <CustomButton
          width={65}
          height={35}
          variant="tertiary"
          onClick={() => onDeleteOption(optionSetId, optionId)}
        >
          삭제
        </CustomButton>
      </DeleteButtonBlock>

      <OptionNameInput
        width={100}
        height={45}
        placeholder="옵션명을 입력해 주세요. (필수)"
        type="text"
        value={optionName}
        onChange={onChangeOptionName}
      />

      <OptionInputGroup>
        <OptionInputBox>
          <OptionInput
            width={150}
            height={45}
            placeholder="상품 정상가 (필수)"
            type="number"
            value={normalPrice}
            onChange={onChangeNormalPrice}
          />
          <span>원</span>
        </OptionInputBox>

        <DiscountRateText>할인율: {discountRateElement()}</DiscountRateText>

        <OptionInputBox>
          <OptionInput
            width={150}
            height={45}
            placeholder="상품 판매가 (필수)"
            type="number"
            value={salePrice}
            onChange={onChangeSalePrice}
          />
          <span>원</span>
        </OptionInputBox>

        <OptionInputBox>
          <OptionInput
            width={150}
            height={45}
            type="number"
            placeholder="재고 (필수)"
            value={productStock}
            onChange={onChangeProductStock}
          />
          <span>개</span>
        </OptionInputBox>

        <SelectBox>
          <option>비과세</option>
          <option>과세</option>
        </SelectBox>
      </OptionInputGroup>

      <AdditionalOptionList
        additionalOptionList={additionalOptionList}
        optionSetId={optionSetId}
        optionId={optionId}
      />

      <CreateAdditionalOptionButton
        onClick={() => onCreateAdditionalOption(optionSetId, optionId)}
      >
        추가 옵션 상품 추가
      </CreateAdditionalOptionButton>
    </OptionItemContainer>
  );
}

const OptionItemContainer = styled.div`
  min-height: 230px;
  border: 1px solid ${theme.colors.border0};
  margin: 10px 0;
  padding: 16px;
  border-radius: 6px;
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const DeleteButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

const OptionNameInput = styled(Input)`
  width: 100%;
  margin-bottom: 12px;
`;

const OptionInputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OptionInputBox = styled.div`
  span {
    font-size: 14px;
  }
`;

const OptionInput = styled(Input)`
  margin-right: 8px;
`;

const DiscountRateText = styled.span`
  font-size: 14px;
  height: 18px;
  color: #7b7676;
`;

const SelectBox = styled.select`
  height: 45px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 80px;
`;

const CreateAdditionalOptionButton = styled.span`
  font-weight: 700;
  cursor: pointer;
`;

export default OptionListItem;
