import styled from "styled-components";
import { bp, mq } from "../styles/Utilities.styled";

export const StyledApp = styled.div`
    .app-container {
        display: flex;
    }
    .sidebar {
        ${mq(bp.small)} {
            flex: 1;
        }
    }
    
    .content {
        ${mq(bp.small)} {
            flex: 4;
        }
    }
`