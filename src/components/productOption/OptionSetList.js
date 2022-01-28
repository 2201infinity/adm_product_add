import { productOptionState } from "atoms/productOption";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import OptionRecommandMessage from "./OptionRecommandMessage";
import OptionSetListItem from "./OptionSetListItem";

function OptionSetList() {
  const options = useRecoilValue(productOptionState);

  if (options.length === 0) return <OptionRecommandMessage />;

  return (
    <OptionSetListContainer>
      {options.map((option) => (
        <OptionSetListItem key={option.id} optionId={option.id} />
      ))}
    </OptionSetListContainer>
  );
}

const OptionSetListContainer = styled.div``;

export default OptionSetList;
