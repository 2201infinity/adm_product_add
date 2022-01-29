import React from "react";
import styled, { css } from "styled-components";
import theme from "styles/theme";

/**
 *
 * @param {"primary" | "secondary" | "tertiary"} variant "primary" | "secondary" | "tertiary"
 * @param {number} width number
 * @param {number} height number
 * @param {string} borderRadius string
 * @param {React.ReactNode} children React.ReactNode
 */

function CustomButton({
  variant,
  width,
  height,
  borderRadius = "4px",
  children,
  ...rest
}) {
  return (
    <ButtonStyled
      variant={variant}
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${theme.colors.mainColor};
          color: #fff;
          border: none;
        `;
      case "secondary":
        return css`
          background-color: #fff;
          color: ${theme.colors.mainColor};
          border: 1px solid ${theme.colors.mainColor};
        `;
      case "tertiary":
        return css`
          background-color: #fff;
          color: #b3130b;
          border: 1px solid #b3130b;
        `;
      default:
        return css``;
    }
  }}
`;

export default CustomButton;
