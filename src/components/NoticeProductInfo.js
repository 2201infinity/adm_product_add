import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./common/CustomButton";
import NoticeCard from "./NoticeCard";

function NoticeProductInfo() {
  const [cardList, setCardList] = useState([1]);

  const onAddNewCard = () => {
    const length = cardList[cardList.length - 1];
    const test = length + 1;
    setCardList((list) => [...list, test]);
  };

  const onDeleteCard = (idx) => {
    if (idx === 1) return;
    setCardList((list) => list.filter((item) => item !== idx));
  };

  return (
    <ProductNoticeWrapper>
      {cardList.map((item, i) => (
        <NoticeCard
          key={i}
          itemId={item}
          cardNumber={i + 1}
          onDeleteCard={onDeleteCard}
        />
      ))}
      <AddCardButton
        onClick={onAddNewCard}
        width="550"
        height="38"
        variant="secondary"
      >
        정보고시 추가
      </AddCardButton>
    </ProductNoticeWrapper>
  );
}

export default NoticeProductInfo;

const ProductNoticeWrapper = styled.div`
  background-color: #dedede;
  padding: 15px;
`;

const AddCardButton = styled(CustomButton)``;
