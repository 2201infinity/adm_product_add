import React, { useEffect, useState } from "react";
import Toggle from "./common/Toggle";
import theme from "styles/theme";
import { DatePickerTemplate } from "./common/DatePicker";
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
    <DeliveryTable>
      <thead>
        <tr>
          <th colSpan="2">상품 배송 설정</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            사용자 배송일 <br />
            출발일 지정
          </th>
          <td>
            <Toggle
              isChecked={delivery}
              onChange={() => onToggle("delivery")}
            />
          </td>
        </tr>
        <tr>
          <th>방문 수령</th>
          <td>
            <Toggle isChecked={pickup} onChange={() => onToggle("pickup")} />
          </td>
        </tr>
        <tr>
          <th>
            선 주문 <br /> 예약 배송
          </th>
          <td>
            <Toggle
              isChecked={preOrder}
              onChange={() => onToggle("preOrder")}
            />
            <DatePickerTemplate />
          </td>
        </tr>
      </tbody>
    </DeliveryTable>
  );
}

export default ProductDelivery;

const DeliveryTable = styled.table`
  border: 1px solid ${theme.colors.lightPurple};
  border-collapse: collapse;
  text-align: left;
  vertical-align: middle;
  margin-top: auto;
  margin-bottom: auto;

  th,
  td {
    border: 1px solid ${theme.colors.lightPurple};
    padding: 10px;
  }
`;
