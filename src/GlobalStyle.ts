import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    body {
        --text-color: ${(props) => props.theme.textColor};
        --recommendtext-color: ${(props) => props.theme.recommendTextColor};
        --background-color: ${(props) => props.theme.backgroundColor};
        --button-color: ${(props) => props.theme.buttonColor};
        --buttontext-Color: ${(props) => props.theme.buttonTextColor};
    }

    @font-face {
        font-family: 'LINESeedKR-Rg';
        src: local('LINESeedKR-Rg'), local('LINESeedKR-Rg');
        font-style: normal;
    }

    @font-face {
        font-family: 'LINESeedKR-Bd';
        src: local('LINESeedKR-Bd'), local('LINESeedKR-Bd');
        font-style: normal;
    }

    @font-face {
        font-family: 'LINESeedKR-Th';
        src: local('LINESeedKR-Th'), local('LINESeedKR-Th');
        font-style: normal;
    }

    ${reset}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'LINESeedKR-Rg', sans-serif, Arial;
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.backgroundColor};
    }
    
    ul,li {
        list-style: none;
    }

    button, input {
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        font: inherit;
    }

    input {
        width: 100%;
        height: 100%;
    }
`;
