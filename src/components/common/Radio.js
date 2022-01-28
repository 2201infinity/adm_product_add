import React from "react";
import styled from "styled-components";

/**
 * @params onClick: () => onClick(value) 형식으로 들어와야 해요!
 */

function Radio({ children, name, onClick, ...rest }) {
  return (
    <RadioWrapper onClick={onClick}>
      <RadioBtn {...rest} onChange={onClick} type="radio" />
      <RadioBtnLabel htmlFor={name}>{children}</RadioBtnLabel>
    </RadioWrapper>
  );
}

export default Radio;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 23px;
`;

const RadioBtnLabel = styled.label`
  padding: 4px 0 0 5px;
`;

const RadioBtn = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #808080;
  border-radius: 50%;
  outline: none;
  background: #ffffff;

  :before {
    content: "";
    display: block;
    width: 80%;
    height: 80%;
    margin: 10% auto;
    border-radius: 50%;
  }
  :checked:before {
    background: #342f6a;
  }
`;
