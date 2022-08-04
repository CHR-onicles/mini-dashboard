import styled from "styled-components";
import { bp, mq } from "../styles/Utilities.styled";

export const StyledApp = styled.div`
  .app-container {
    display: flex;
    height: 100%;
    padding-bottom: 2rem;
  }

  .sidebar {
    ${mq(bp.small)} {
      flex: 1.5;
    }
    ${mq(bp.medium)} {
      flex: 1;
    }
    ${mq(bp.xxlarge)} {
      flex: 0.5;
    }
  }

  .page {
    margin-top: 1rem;
    width: 90%;
    margin-inline: auto;

    ${mq(bp.small)} {
      flex: 3.5;
      padding: 1rem;
    }
    ${mq(bp.medium)} {
      flex: 4;
    }
    ${mq(bp.xxlarge)} {
      flex: 4.5;
    }


  }

  .fade-enter {
      opacity: 0;
      transform: scale(1.1);
    }

    .fade-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity 300ms, transform 300ms;
    }

    .fade-exit {
      opacity: 1;
      transform: scale(1);
    }

    .fade-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 300ms, transform 300ms;
    }
`;
