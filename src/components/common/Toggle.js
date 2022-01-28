import styled from "styled-components";
import theme from "styles/theme";

function Toggle({ toggleOnCircle, toggleOnBg, setChecked, ...rest }) {
  return (
    <Wrapper>
      <CheckBox
        toggleOnCircle={theme.colors.toggleOnCircle}
        toggleOnBg={theme.colors.toggleOnBg}
        onChange={() => setChecked()}
        type="checkbox"
      />
    </Wrapper>
  );
}

export default Toggle;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  z-index: 0;
`;
const CheckBox = styled.input`
  all: unset;
  z-index: 1;
  width: 4.2rem;
  height: 2rem;
  border-radius: 2em;

  /* toggle off */
  background-color: grey;
  ::before {
    position: absolute;
    padding-right: 1em;
    align-items: center;
    justify-content: flex-end;
  }
  ::after {
    content: "";
    z-index: 2;
    top: calc((2rem - 1.6em) / 2);
    left: calc((2rem - 1.6em) / 2);
    width: 1.6em;
    height: 1.6em;
    display: block;
    border-radius: 50%;
    background: whitesmoke;
    position: relative;
    transition: all 0.2s ease-in-out;
  }

  /* toggle on */
  &:checked {
    background-color: ${(props) => props.toggleOnBg};
    ::before {
      position: absolute;
      padding-left: 1em;
      width: 5rem;
      height: 2rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      transition: all 0.2s ease-in-out;
    }
    ::after {
      content: "";
      position: relative;
      display: block;
      width: 1.6em;
      height: 1.6em;
      top: calc((2rem - 1.6em) / 2);
      left: calc(4.2rem - 1.9em);
      border-radius: 50%;
      background: ${(props) => props.toggleOnCircle};
      transition: all 0.2s ease-in-out;
    }
  }
`;
