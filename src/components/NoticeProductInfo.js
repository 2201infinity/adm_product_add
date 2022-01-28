import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./common/CustomButton";
import NoticeCard from "./NoticeCard";

function NoticeProductInfo() {
  const [cardNumber, setCardNumber] = useState(0);
  const [cardList, setCardList] = useState([cardNumber]);

  const onAddNewCard = () => {
    setCardNumber((prev) => prev + 1);
    setCardList((list) => [...list, cardNumber]);
  };

  const onDeleteCard = (e) => {
    const targetI = Number(e.target.id);
    if (targetI >= 1) {
      setCardList((list) => list.filter((items, i) => i !== targetI));
    }
  };

  return (
    <ProductNoticeWrapper>
      {cardList.map((items, i) => (
        <NoticeCard
          key={i}
          id={i}
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
