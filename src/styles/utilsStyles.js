import { css } from "styled-components";

export const scrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
`;
