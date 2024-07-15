import { createGlobalStyle } from "styled-components"


export const colors = {
    white: '#FFFFFF',
    white2: '#FFF8F2',
    bege: '#FFEBD9',
    rose: '#E66767',
    red: '##FF002B'
  }
export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${colors.white2};
        color: ${colors.rose};
    }

`
