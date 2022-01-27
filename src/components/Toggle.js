import styled, { css } from "styled-components";

function Toggle({
  left,
  right,
  leftColor,
  rightColor,
  leftBgColor,
  rightBgColor,
  circleColor,
  setChecked,
}) {
  return (
    <Wrapper>
      <StyledToggle
        left={left}
        right={right}
        leftColor={leftColor}
        rightColor={rightColor}
        leftBgColor={leftBgColor}
        rightBgColor={rightBgColor}
        circleColor={circleColor}
        onChange={() => setChecked()}
        type="checkbox"
      />
    </Wrapper>
  );
}

export default Toggle;

const StyledToggle = styled.div`
  z-index: 1;
  width: 5rem;
  height: 2rem;
  background: var(--second);
  background: ${(props) => props.leftBgColor ?? "var(--grey)"};
  border-radius: 2em; /* 선택X 텍스트 */
  ::before {
    position: absolute;
    content: "${(props) => props.left ?? "Yes"}";
    padding-left: 1em;
    width: 5rem;
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => props.leftColor ?? "var(--white)"};
    font-weight: var(--bold);
    font-size: var(--small); /* 텍스트 트랜지션 */
    transition: all 0.2s ease-in-out;
  } /* 선택X 원 */
  ::after {
    position: relative;
    content: "";
    display: block;
    width: 1.6em;
    height: 1.6em;
    top: calc((2rem - 1.6em) / 2);
    left: calc(5rem - 1.9em);
    border-radius: 50%;
    background: ${(props) =>
      props.circleColor ?? "var(--white)"}; /* 원 이동 트랜지션 */
    transition: all 0.2s ease-in-out;
  }
  &:checked {
    background: ${(props) =>
      props.rightBgColor ?? "var(--black)"}; /* 배경색 변경 트랜지션 */
    transition: all 0.2s ease-in-out; /* 선택 O 텍스트 */
    ::before {
      position: absolute;
      padding-right: 1em;
      content: "${(props) => props.right ?? "No"}";
      align-items: center;
      justify-content: flex-end;
      color: ${(props) => props.rightColor ?? "var(--white)"};
    } /* 선택 O 원 */
    ::after {
      content: "";
      z-index: 2;
      top: calc((2rem - 1.6em) / 2);
      left: calc((2rem - 1.6em) / 2);
      width: 1.6em;
      height: 1.6em;
      display: block;
      border-radius: 50%;
      background: ${(props) => props.circleColor ?? "var(--white)"};
      position: relative;
    }
  }
`;
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 0;
`;
