import { createGlobalStyle } from 'styled-components';
import { colors } from '../theme/colors';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
    }
    body {
        margin: 0px;
        padding: 0px;
        font-size: 1.6rem;
        background-color: ${colors.firstColorBg};
        color: ${colors.firstColorFont};
    }
    p, h1{
        padding: 0;
        margin: 0;
        font-weight: 100;
    }
    ul{
        padding-left: 0;
    }
`;
