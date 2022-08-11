import styled from "styled-components";
import { theme } from "../../styles/Utilities.styled";

export const StyledHome = styled.div`
    z-index: 999;
    position: fixed;
    inset: 0;
    /* inset: 0; */
    background-color: ${theme.colors.bg};

    .content {
        width: 100%;
        max-height: 100vh;
        overflow-y: auto;
    }
`