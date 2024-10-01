import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        font-family: "Outfit", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        background-color: #d6e2f0;
    }
`