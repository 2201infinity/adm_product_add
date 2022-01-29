import { css } from "styled-components";

const colors = {
  mainColor: "#342F6A",
  filterGreen: "#EAF6D7",
  lightPurple: "#EFEFF3",
  toggleOnCircle: "#311b92",
  toggleOnBg: "#b39ddb",
  border0: "#d4d4d4",
  border1: "#EFEFF3",
  lightGray: "#fbfbfb",
};

const sizes = {
  xm: css`
    --button-font-size: 10px;
    --button-padding: 4px 8px;
    --button-radius: 3px;
    --button-bg-color: transparent;
    --button-color: "#342F6A";
  `,
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
