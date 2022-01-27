import React from "react";
import styled from "styled-components";

const Input = ({ width, ...rest }) => {
  return <StyledInput {...rest} width={width} />;
};
export default Input;

const StyledInput = styled.input`
  width: ${(props) => props.width}px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  height: 38px;
  padding-left: 10px;
  }
`;
