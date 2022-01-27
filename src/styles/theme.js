import { css } from "styled-components";

const colors = {
  mainColor: "#342F6A",
  toggleOn: "#2719B5",
  toggleOff: "#DEDCF2",
  filterGreen: "#EAF6D7",
  lightPurple: "#EFEFF3",
};

const sizes = {
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

const theme = {
  colors,
  sizes,
};

export default theme;
