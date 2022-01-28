import React from "react";
import styled from "styled-components";
import theme from "styles/theme";

function OptionListItem({ optionId }) {
  return <OptionItemContainer>OptionListItem</OptionItemContainer>;
}

const OptionItemContainer = styled.div`
  height: 250px;
  border: 1px solid ${theme.colors.border0};
  margin: 10px 0;
  border-radius: 6px;
`;

export default OptionListItem;
