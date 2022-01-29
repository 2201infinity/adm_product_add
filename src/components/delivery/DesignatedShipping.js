import React from "react";
import OptionName from "./OptionName";
import OptionContent from "./OptionContent";
import Toggle from "components/common/Toggle";
import styled from "styled-components";

function DesignatedShipping({ shippingOn, setShippingOn, setPreOrderOn }) {
  const onToggle = () => {
    setShippingOn((check) => !check);
    setPreOrderOn(false);
    return shippingOn;
  };
  return (
    <OptionWrapper>
      <OptionName>
        사용자 배송일 <br />
        출발일 지정
      </OptionName>
      <OptionContent>
        <Toggle onChange={onToggle} isChecked={shippingOn} />
      </OptionContent>
    </OptionWrapper>
  );
}

export default DesignatedShipping;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
