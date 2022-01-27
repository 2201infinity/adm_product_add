import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-font-size: 14px;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 16px;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 20px;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `,
};

function Button({ disabled, size, children, ...rest }) {
  const sizeStyle = SIZES[size];

  return (
    <StyledButton disabled={disabled} sizeStyle={sizeStyle}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(props) => props.sizeStyle}

  margin: 0;
  border: none;
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: #150754;
  color: var(--button-color, #ffffff);

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, #000080);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default Button;
