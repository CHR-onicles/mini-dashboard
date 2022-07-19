import styled from "styled-components";
import { bp, mq, rem, theme } from "../../styles/Utilities.styled";

export const StyledWidgetLg = styled.div`
    padding: 1rem;
    box-shadow: ${theme.cardBoxShadow};

    ${mq(bp.xlarge)} {
        flex: 4;
    }

    h3 {
        font-size: ${rem(17)};
    }
`