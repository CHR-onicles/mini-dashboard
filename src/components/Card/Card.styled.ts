import styled from "styled-components";
import { bp, flexCenter, mq, rem, theme } from "../../styles/Utilities.styled";

export const StyledCard = styled.div`
  ${flexCenter};
  width: 100%;
  height: ${rem(200)};
  background-color: white;
  box-shadow: ${theme.cardBoxShadow};
  border-radius: 3px;

  ${mq(bp.medium)} {
    flex-basis:  calc(50% - 2rem);
    /* width: min(100%, ${rem(300)}); */
  }
  ${mq(bp.large)} {
    flex-basis:  calc(25% - 2rem);
    /* width: min(100%, ${rem(300)}); */
  }

  p {
    font-size: 1.5rem;
  }
`;
