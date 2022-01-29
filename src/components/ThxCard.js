import React from "react";
import OptionName from "./delivery/OptionName";
import OptionContent from "./delivery/OptionContent";
import Toggle from "components/common/Toggle";
import styled from "styled-components";

function ThxCard({ isThxCardOn, setIsThxCardOn }) {
  const onToggle = () => {
    setIsThxCardOn((check) => !check);
    return isThxCardOn;
  };
  return (
    <OptionBox>
      <Header>
        <h3>기타 설정</h3>
      </Header>
      <OptionWrapper>
        <OptionName>감사카드 제공</OptionName>
        <OptionContent>
          <Toggle onChange={onToggle} isChecked={isThxCardOn} />
        </OptionContent>
      </OptionWrapper>
    </OptionBox>
  );
}

export default ThxCard;

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
