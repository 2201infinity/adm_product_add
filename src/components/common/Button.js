import styled from "styled-components";
import theme from "styles/theme";

function Button({ disabled, size, children, ...rest }) {
  return (
    <StyledButton disabled={disabled} sizeStyle={theme.sizes[size]} {...rest}>
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
  background: var(--button-bg-color, #150754);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, #e8eaf6);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default Button;
