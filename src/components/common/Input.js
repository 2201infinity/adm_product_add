import React from "react";
import styled from "styled-components";

const Input = ({ width, height = "38", ...rest }) => {
  return <StyledInput {...rest} width={width} height={height} />;
};
export default Input;

const StyledInput = styled.input`
  width: ${(props) => props.width}px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  height: ${(props) => props.height}px;
  padding-left: 10px;
`;
