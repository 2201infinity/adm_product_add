import React from "react";
import styled from "styled-components";
import OptionSetList from "./OptionSetList";

function ProductOptionContent() {
  return (
    <OptionContentContainer>
      <OptionSetList />
    </OptionContentContainer>
  );
}

const OptionContentContainer = styled.div`
  overflow: auto;
  padding: 30px;
  height: auto;
`;

export default ProductOptionContent;
