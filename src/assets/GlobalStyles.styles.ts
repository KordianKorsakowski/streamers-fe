import { createGlobalStyle } from 'styled-components';
import { colors } from '../theme/colors';
import { device } from '../theme/breakpoints';

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
        @media ${device.mobileL} {
            font-size: 1.2rem;
        }
    }
    p, h1{
        padding: 0;
        margin: 0;
        font-weight: 100;
    }
    ul{
        padding-left: 0;
    }

    &::-webkit-scrollbar {
        overflow: hidden;
        width: 10px;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        overflow: hidden;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        overflow: hidden;

        border-radius: 100px;
        background-color: #fff;
    }
    
`;
