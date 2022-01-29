import React, { useEffect, useState } from "react";
import Toggle from "../common/Toggle";
import OptionName from "./OptionName";
import OptionContent from "./OptionContent";
import { DatePickerTemplate } from "../common/DatePicker";
import { DateTimePicker } from "../common/DateTimePicker";
import styled from "styled-components";

function PreOrder({ preOrderOn, setShippingOn, setPickupOn, setPreOrderOn }) {
  const onToggle = () => {
    setPreOrderOn((check) => !check);
    setShippingOn(false);
    setPickupOn(false);
    setDisabled((state) => !state);
  };

  const [disabled, setDisabled] = useState(true);

  const [orderEndTime, setOrderEndTime] = useState();
  const [earlyDeliveryTime, setEarlyDeliveryTime] = useState(null);
  const [normalDeliveryTime, setNormalDeliveryTime] = useState(null);

  const onChangeOrderEndTime = (time) => {
    setOrderEndTime(time);
  };

  const onChangeEarlyDeliveryTime = (time) => {
    if (earlyDeliveryTime < orderEndTime) {
      alert("배송 불가 시간입니다");
      return;
    }
    setEarlyDeliveryTime(time);
  };

  const onChangeNormalDeliveryTime = (time) => {
    if (normalDeliveryTime < orderEndTime) {
      alert("배송 불가 시간입니다");
      return;
    }
    setNormalDeliveryTime(time);
  };

  return (
    <PreOrderWrapper>
      <OptionWrapper>
        <OptionName height="280">
          선 주문 <br /> 예약 배송
        </OptionName>
        <OptionContent height="280">
          <Toggle isChecked={preOrderOn} onChange={onToggle} />
          <p>주문 시간</p>
          <DateTimePicker
            disabled={preOrderOn === false}
            onChangeOrderEndTime={onChangeOrderEndTime}
          />
          <p>새벽 배송</p>
          <DatePickerTemplate
            disabled={preOrderOn === false}
            dateTime={earlyDeliveryTime}
            onChangeDateTime={onChangeEarlyDeliveryTime}
          />
          <p>일반 배송</p>
          <DatePickerTemplate
            disabled={preOrderOn === false}
            dateTime={normalDeliveryTime}
            onChangeDateTime={onChangeNormalDeliveryTime}
          />
        </OptionContent>
      </OptionWrapper>
    </PreOrderWrapper>
  );
}

export default PreOrder;

const PreOrderWrapper = styled.div``;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
