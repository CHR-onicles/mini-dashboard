import styled from "styled-components";
import { bp, mq, size } from "../styles/Utilities.styled";

export const StyledApp = styled.div`
  ${size("100%")}

  .app-container {
    position: relative;
    /* outline: 1px solid; */
  }

  .page {
    position: static;
    width: 90%;
    padding-block: 2rem;
    margin-inline: auto;
    overflow-y: auto;
    /* outline: 1px solid red; */

    ${mq(bp.small)} {
      position: absolute;
      top: 0;
      left: calc(var(--sidebar-width) + var(--sidebar-page-gap));
      width: calc(100% - (var(--sidebar-width) + var(--sidebar-page-gap)));
      height: calc(100vh - 5rem);
      padding-inline: 2rem;
    }
  }

  .transition-enter {
    opacity: 0;
    transform: translateY(5%);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 200ms, transform 200ms;
  }

  .transition-exit {
    opacity: 1;
    transform: translateY(0%);
  }

  .transition-exit-active {
    opacity: 0;
    transform: translateY(
      -5%
    ); // -5 gives this freaking smooth transition mann, but +5 is kinda lit too
    transition: opacity 100ms, transform 100ms;
  }
`;
