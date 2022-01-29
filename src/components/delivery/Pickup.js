import React from "react";
import OptionName from "./OptionName";
import OptionContent from "./OptionContent";
import Toggle from "components/common/Toggle";
import styled from "styled-components";

function Pickup({ pickupOn, setPickupOn, setPreOrderOn }) {
  const onToggle = () => {
    setPickupOn((check) => !check);
    setPreOrderOn(false);
    return pickupOn;
  };
  return (
    <OptionWrapper>
      <OptionName>방문수령</OptionName>
      <OptionContent>
        <Toggle onChange={onToggle} isChecked={pickupOn} />
      </OptionContent>
    </OptionWrapper>
  );
}

export default Pickup;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
