import React from "react";
import styled from "styled-components";

function OptionContent({ width = "70", children, height = "80", ...rest }) {
  return (
    <ContentBox width={width} height={height}>
      {children}
    </ContentBox>
  );
}

export default OptionContent;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;
  padding-left: 30px;
  border-bottom: 1px solid #dedede;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}px;
`;
