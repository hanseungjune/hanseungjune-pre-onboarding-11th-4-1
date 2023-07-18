import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => {
      const {
        textColor,
        recommendTextColor,
        backgroundColor,
        buttonColor,
        buttonTextColor,
      } = theme;
      return `
        body {
            --text-color: ${textColor};
            --recommendtext-color: ${recommendTextColor};
            --background-color: ${backgroundColor};
            --button-color: ${buttonColor};
            --buttontext-Color: ${buttonTextColor};
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
            color: ${textColor};
            background-color: ${backgroundColor};
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
    }}
`;
