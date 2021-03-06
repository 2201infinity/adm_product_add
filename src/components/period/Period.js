import { productRegisterFormState } from "atoms/productRegisterForm";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import theme from "styles/theme";
import { DateTimePicker } from "../common/DateTimePicker";
import Radio from "../common/Radio";

const EXPOSURE_PERIOD = [
  {
    id: 1,
    value: "제한 없음",
  },
  {
    id: 2,
    value: "미노출",
  },
  {
    id: 3,
    value: "노출 기간 설정",
  },
];

const SALES_PERIOD = [
  {
    id: 1,
    value: "제한 없음",
  },
  {
    id: 2,
    value: "미판매",
  },
  {
    id: 3,
    value: "판매 기간 설정",
  },
];

export const ProductPeriod = () => {
  const setProductForm = useSetRecoilState(productRegisterFormState);
  const defaultExposureOption = EXPOSURE_PERIOD[0].value;
  const defaultSalesOption = SALES_PERIOD[0].value;
  const [selectedExposureOption, setselectedExposureOption] = useState(
    defaultExposureOption
  );
  const [selectedSalesOption, setSelectedSalesOption] =
    useState(defaultSalesOption);
  const onChangeExposureOption = (value) => {
    setselectedExposureOption(value);
    setProductForm((prev) => ({ ...prev, 상품노출기한: value }));
  };

  const onChnageSalesOption = (value) => {
    setSelectedSalesOption(value);
    setProductForm((prev) => ({ ...prev, 상품판매기한: value }));
  };
  return (
    <PeriodSection>
      <PeriodHeader>노출 및 판매기간 설정</PeriodHeader>
      <PeriodContainer>
        <PeriodTitle>상품 노출 기한</PeriodTitle>
        <Period>
          {EXPOSURE_PERIOD.map((radio) => {
            const { value, id } = radio;
            return (
              <Radio
                checked={selectedExposureOption === value}
                onClick={() => onChangeExposureOption(value)}
                value={value}
                key={id}
              >
                {value}
              </Radio>
            );
          })}
          <DateTimePicker
            disabled={selectedExposureOption !== "노출 기간 설정"}
          />
        </Period>
      </PeriodContainer>
      <PeriodContainer>
        <PeriodTitle>상품 판매 기한</PeriodTitle>
        <Period>
          {SALES_PERIOD.map((radio) => {
            const { value, id } = radio;
            return (
              <Radio
                checked={selectedSalesOption === value}
                onClick={() => onChnageSalesOption(value)}
                value={value}
                key={id}
              >
                {value}
              </Radio>
            );
          })}
          <DateTimePicker disabled={selectedSalesOption !== "판매 기간 설정"} />
        </Period>
      </PeriodContainer>
    </PeriodSection>
  );
};

const PeriodSection = styled.section`
  border: 1.5px solid ${theme.colors.lightPurple};
  font-weight: 600;
  margin-bottom: 40px;
`;

const PeriodHeader = styled.h3`
  padding: 12px 0 12px 16px;
  border-bottom: 1.5px solid ${theme.colors.lightPurple};
`;

const PeriodContainer = styled.div`
  display: flex;
  & + & {
    border-top: 1.5px solid ${theme.colors.lightPurple};
  }
`;

const PeriodTitle = styled.h4`
  padding: 16px 12px 0;
  background-color: #fbfbfb;
  border-right: 1.5px solid ${theme.colors.lightPurple};
`;

const Period = styled.div`
  padding: 12px;
`;
