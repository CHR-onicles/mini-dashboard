import styled from "styled-components";
import { bp, mq, rem, size, theme } from "../../styles/Utilities.styled";

export const StyledSidebar = styled.nav`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transform: translateX(-100%);
  transition: transform 0.3s;

  ${mq(bp.small)} {
    position: relative;
    transform: translate(0);
    background-color: ${theme.colors.bg};
    width: var(--sidebar-width);
    /* outline: 1px solid blue; */
  }

  &.active {
    transform: translate(0);
  }

  &.onHomepage {
    display: none;
  }

  .logo {
    display: none;
    font-size: ${rem(18)};
    font-weight: 700;
    
    ${mq(bp.small)} {
      position: absolute;
      display: block;
      margin-top: -3rem;
      padding-left: 1rem;
      font-size: ${rem(22)};
    }
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
    background-color: ${theme.colors.bg};
    z-index: 1;

    ${mq(bp.small)} {
      position: sticky;
      top: 0;
      left: 0;
      ${size("100%", "fit-content")};
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

      &.active {
        background-color: ${theme.colors.gray300};
      }

      &:hover {
        background-color: ${theme.colors.gray200};
      }

      a {
        ${size("100%")};
      }

      .menu-icon {
        margin-right: 0.5em;
      }
    }
  }

  .close-btn {
    position: absolute;
    top: 2%;
    right: 3%;
    color: ${theme.colors.gray700};
    font-size: 1.8rem;
    background: none;

    ${mq(bp.small)} {
      display: none;
    }
  }
`;
