import { productOptionState } from "atoms/productOption";
import CustomButton from "components/common/CustomButton";
import Input from "components/common/Input";
import produce from "immer";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

function AdditionalOptionListItem({
  additionalOptionId,
  optionSetId,
  optionId,
}) {
  const setProductOption = useSetRecoilState(productOptionState);

  const onDeleteAdditionalOption = () => {
    setProductOption((prevOptions) =>
      produce(prevOptions, (draft) => {
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].id === optionSetId) {
            draft[i].options.map((item) => {
              if (item.id === optionId) {
                item.additionalOptions = item.additionalOptions.filter(
                  (additionalOption) =>
                    additionalOption.id !== additionalOptionId
                );
              }
            });
            break;
          }
        }
      })
    );
  };

  return (
    <AdditionalOptionItemStyled>
      ㄴ
      <OptionInput width={320} height={45} placeholder="추가 옵션명" />
      <OptionInput width={250} height={45} placeholder="추가 옵션 정상가" />원
      <CustomButton
        width={50}
        height={35}
        variant="tertiary"
        onClick={onDeleteAdditionalOption}
      >
        삭제
      </CustomButton>
    </AdditionalOptionItemStyled>
  );
}

const AdditionalOptionItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OptionInput = styled(Input)`
  margin-right: 8px;
`;

export default AdditionalOptionListItem;
