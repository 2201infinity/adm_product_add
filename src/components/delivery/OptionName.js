import React from "react";
import styled from "styled-components";

function OptionName({ width = "120", height = "80", children, ...rest }) {
  return (
    <StyledName width={width} height={height}>
      <p>{children}</p>
    </StyledName>
  );
}

export default OptionName;

const StyledName = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 10px;
  border: 1px solid #dedede;
  border-top: none;
`;
