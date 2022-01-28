import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,
    body,
    #root {
    height: 100%;
    }
    * {
    box-sizing: border-box;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    .react-datepicker-wrapper {
        width: 200px;
    }
`;

export default GlobalStyles;
