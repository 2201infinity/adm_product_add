import React, { useEffect, useState } from "react";
import Toggle from "./common/Toggle";
import theme from "styles/theme";
import { DatePickerTemplate } from "./common/DatePicker";
import { DateTimePicker } from "./common/DateTimePicker";
import styled from "styled-components";

function ProductDelivery() {
  const [isToggleList, setIsToggleList] = useState({
    delivery: false,
    pickup: false,
    preOrder: false,
  });

  const { delivery, pickup, preOrder } = isToggleList;

  const onToggle = (name) => {
    setIsToggleList({
      ...isToggleList,
      [name]: !isToggleList[name],
    });
  };

  useEffect(() => {
    if (delivery || pickup) {
      setIsToggleList({
        ...isToggleList,
        preOrder: false,
      });
    }
    if (preOrder) {
      setIsToggleList({
        ...isToggleList,
        delivery: false,
        pickup: false,
      });
    }
  }, [delivery, pickup, preOrder]);

  return (
    <>
      <div>
        <OptionWrapper>
          <p>
            사용자 배송일 <br />
            출발일 지정
          </p>
          <Toggle isChecked={delivery} onChange={() => onToggle("delivery")} />
        </OptionWrapper>
        <OptionWrapper>
          <p>방문 수령</p>
          <Toggle isChecked={pickup} onChange={() => onToggle("pickup")} />
        </OptionWrapper>
        <PreOrderWrapper>
          <p>
            선 주문 <br /> 예약 배송
          </p>
          <Toggle isChecked={preOrder} onChange={() => onToggle("preOrder")} />
          <p>주문 시간</p>
          <DateTimePicker />
          <p>새벽 배송</p>
          <DatePickerTemplate />
          <p>일반 배송</p>
          <DatePickerTemplate />
        </PreOrderWrapper>
      </div>
    </>
  );
}

export default ProductDelivery;

const OptionWrapper = styled.div`
  display: flex;
`;

const PreOrderWrapper = styled.div``;
