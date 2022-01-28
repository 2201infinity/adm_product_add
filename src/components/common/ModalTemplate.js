import React from "react";
import styled from "styled-components";

function ModalTemplate({
  width,
  height,
  isModal,
  onToggleModal,
  children,
  ...rest
}) {
  return (
    <ModalContainer onMouseDown={onToggleModal} {...rest}>
      <ModalInner
        width={width}
        height={height}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </ModalInner>
      <ModalBackground />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const ModalInner = styled.div`
  position: absolute;
  z-index: 9999;
  background-color: #fff;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 8px;
`;

const ModalBackground = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.4;
`;

export default ModalTemplate;
