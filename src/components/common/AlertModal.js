import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ModalTemplate from "./ModalTemplate";

function AlertModal({ isModal, onToggleModal, message }) {
  return (
    <ModalTemplate
      width="300"
      height="150"
      isModal={isModal}
      onToggleModal={onToggleModal}
    >
      <AlertModalStyled>
        <AlertMessage>{message}</AlertMessage>
        <AlertButtonBlock>
          <Button size="sm" onClick={onToggleModal}>
            확인
          </Button>
        </AlertButtonBlock>
      </AlertModalStyled>
    </ModalTemplate>
  );
}

const AlertModalStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  button {
    padding: 5px;
    width: 50px;
    height: 35px;
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

const AlertMessage = styled.span`
  font-size: 14px;
  font-weight: 700;
  flex: 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export default AlertModal;
