import styled from "styled-components";
import { bp, mq } from "../../styles/Utilities.styled";

export const StyledHome = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .cards-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    ${mq(bp.medium)} {
      flex-flow: row wrap;
      gap: 2rem;
      justify-content: start;
    }
  }

  .chart-container {
    margin-top: 2.5rem;
  }

  .widgets-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    ${mq(bp.medium)} {
      flex-direction: row;
    }
  }
`;
