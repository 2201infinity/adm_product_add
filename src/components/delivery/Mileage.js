import React from "react";
import OptionName from "./OptionName";
import OptionContent from "./OptionContent";
import Toggle from "components/common/Toggle";
import styled from "styled-components";

function Mileage({ isMileageOn, setIsMileageOn }) {
  const onToggle = () => {
    setIsMileageOn((check) => !check);
    return isMileageOn;
  };
  return (
    <OptionBox>
      <Header>
        <h3>상품 혜택 허용 설정</h3>
      </Header>
      <OptionWrapper>
        <OptionName>마일리지 적립</OptionName>
        <OptionContent>
          <Toggle onChange={onToggle} isChecked={isMileageOn} />
        </OptionContent>
      </OptionWrapper>
    </OptionBox>
  );
}

export default Mileage;

const OptionBox = styled.div`
  margin-top: 30px;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  border: 1px solid #d3d3d3;
  border-right: none;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
