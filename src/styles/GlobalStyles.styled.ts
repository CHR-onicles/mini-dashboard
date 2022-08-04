import { createGlobalStyle } from "styled-components";
import { rem, theme } from "./Utilities.styled";

export const GlobalStyles = createGlobalStyle`

    :root {
        --sidebar-width: ${rem(266)};
        --sidebar-page-gap: ${rem(25)};
    }

    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body, #root {
        height: 100%;
    }

    body {
        background-color: ${theme.colors.bg};
        font-family: ${theme.fonts.primary};
        color: black;
        overflow: hidden;
        line-height: 1.5;
    }

    h1, h2 {
        line-height: 1.1;
    }

    h3, h4, h5, h6 {
        line-height: 1.2;
    }

    img, iframe {
        display: block;
        max-width: 100%;
        object-fit: cover;
        object-position: center;
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        font-family: inherit;
        color: inherit;
        display: inline-block;
        text-decoration: none;
    }

    button, input {
        border: none;
    }

    button {
        cursor: pointer;
    }
 
    // Remove all animations and transitions for users
    // who have it turned off in system settings
    @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
    }
}
`;
