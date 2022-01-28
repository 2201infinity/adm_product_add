import React from "react";
import styled from "styled-components";

function OptionRecommandMessage() {
  return (
    <MessageContainer>
      <MessageStyled>옵션세트를 추가하여 옵션을 구성해 주세요.</MessageStyled>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageStyled = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export default OptionRecommandMessage;
