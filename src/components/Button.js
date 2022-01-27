import styled from "styled-components";
import theme from "styles/theme";

function Button({ disabled, size, children, ...rest }) {
  const sizeStyle = theme.colors[size];

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
