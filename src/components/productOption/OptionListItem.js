/* eslint-disable array-callback-return */
import { productOptionState } from "atoms/productOption";
import CustomButton from "components/common/CustomButton";
import Input from "components/common/Input";
import produce from "immer";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import theme from "styles/theme";
import AdditionalOptionList from "./AdditionalOptionList";

function OptionListItem({ optionSetId, optionId }) {
  const [productOption, setProductOption] = useRecoilState(productOptionState);

  //@TODO 이런거 다 hooks로 빼서 바로 불러올 수 있게 설정 해줘야 함
  const option = productOption
    .filter((option) => option.id === optionSetId)
    .map((option) => option.options.filter((option) => option.id === optionId));

  const additionalOptionList = option[0][0].additionalOptions;

  const onDeleteOption = () => {
    // 옵션이 1개면 해당 옵션세트 자체를 지워주기
    const optionLength = productOption.filter(
      (option) => option.id === optionSetId
    )[0].options.length;

    if (optionLength === 1) {
      setProductOption((prevOptions) =>
        prevOptions.filter(({ id }) => id !== optionSetId)
      );
      return;
    }

    setProductOption((prevOptions) =>
      produce(prevOptions, (draft) => {
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].id === optionSetId) {
            draft[i].options = draft[i].options.filter(
              (item) => item.id !== optionId
            );
            break;
          }
        }
      })
    );
  };

  const onCreateAdditionalOption = () => {
    setProductOption((prevOptions) =>
      produce(prevOptions, (draft) => {
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].id === optionSetId) {
            draft[i].options.map((item) => {
              if (item.id === optionId) {
                item.additionalOptions.push({
                  id: uuidv4(),
                  additionalName: "",
                  additionalNormalPrice: 0,
                });
              }
            });
            break;
          }
        }
      })
    );
  };

  return (
    <OptionItemContainer>
      <DeleteButtonBlock>
        <CustomButton
          width={65}
          height={35}
          variant="tertiary"
          onClick={onDeleteOption}
        >
          삭제
        </CustomButton>
      </DeleteButtonBlock>

      <OptionNameInput
        width={100}
        height={45}
        placeholder="옵션명을 입력해 주세요. (필수)"
      />

      <OptionInputGroup>
        <OptionInputBox>
          <OptionInput
            width={150}
            height={45}
            placeholder="상품 정상가 (필수)"
          />
          <span>원</span>
        </OptionInputBox>

        <DiscountRateText>할인율 %</DiscountRateText>

        <OptionInputBox>
          <OptionInput
            width={150}
            height={45}
            placeholder="상품 판매가 (필수)"
          />
          <span>원</span>
        </OptionInputBox>

        <OptionInputBox>
          <OptionInput width={150} height={45} placeholder="재고 (필수)" />
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

      <CreateAdditionalOptionButton onClick={onCreateAdditionalOption}>
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
