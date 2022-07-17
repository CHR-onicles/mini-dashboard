import styled from "styled-components";
import { bp, mq, rem, size, theme } from "../../styles/Utilities.styled";

export const StyledSidebar = styled.nav`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);

  ${mq(bp.small)} {
    position: static;
    background-color: none;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    top: 0;
    left: 0;
    ${size("90%", "100%")}
    padding-top: 3rem;
    background-color: white;
    z-index: 1;

    ${mq(bp.small)} {
        position: static;
        ${size('unset')};
        background-color: none;
        z-index: 0;
    }

    li {
      width: 90%;
      padding: 0.5em 1em;
      margin-inline: auto;
      font-size: ${rem(17)};
      color: ${theme.colors.gray700};
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: ${theme.colors.gray200};
      }

      .menu-icon {
        margin-right: 0.5em;
      }
    }
  }

  .close-icon {
    color: ${theme.colors.gray700};
    position: absolute;
    top: 2%;
    right: 3%;
    font-size: 1.8rem;

    ${mq(bp.small)} {
      display: none;
    }
  }
`;
