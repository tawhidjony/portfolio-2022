
import { createGlobalStyle } from "styled-components"
export const LightTheme = {
    body: '#ffffff',
    text: '#064663',
    primary: '#362706',
    NeonDerThaw: `'Rochester', cursive;`,
}
export const DarkTheme = {
    body: '#303A52',
    text: '#FAFAFA',
    themeColor: '#646464',
    primary: '#F9F3DF',
}

export const themes = {
    light: LightTheme,
    dark: DarkTheme,
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.text};
        font-family: 'Noto Sans', sans-serif;
        min-height: 100vh;
        max-height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`