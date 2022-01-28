import React from "react";
import styled from "styled-components";

function Radio({ name, children, onChange, ...rest }) {
  return (
    <StyledRadio>
      <input type="radio" name={name} value={name} />
      <label for={name}>{children}</label>
    </StyledRadio>
  );
}

export default Radio;

const StyledRadio = styled.div``;
