import styled from "styled-components";
import { bp, mq, size } from "../../styles/Utilities.styled";

export const StyledHome = styled.div`
  .cards-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    ${mq(bp.small)} {
      flex-flow: row wrap;
    }
  }
`;
