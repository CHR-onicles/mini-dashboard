import styled from "styled-components";
import { bp, mq, size } from "../../styles/Utilities.styled";

export const StyledSidebar = styled.nav`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);

  ${mq(bp.small)} {
    position: static;
    background-color: none;
  }

  .nav-list {
    position: absolute;
    top: 0;
    left: 0;
    ${size("90%", "100%")}
    background-color: white;
    z-index: 1;

    ${mq(bp.small)} {
        position: static;
        ${size('unset')};
        background-color: none;
        z-index: 0;
    }
  }
`;
