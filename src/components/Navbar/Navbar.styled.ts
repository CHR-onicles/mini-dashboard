import styled from "styled-components";
import {
  bp,
  flexSpBetween,
  mq,
  rem,
  size,
  theme,
} from "../../styles/Utilities.styled";

export const StyledNavbar = styled.div`
  opacity: 1;
  padding-block: 1rem;
  width: calc(93% - var(--sidebar-width));
  margin-left: calc(var(--sidebar-width) + 3.5rem);
  /* outline: 1px solid red; */

  &.onHomepage {
    opacity: 0;
  }

  .wrapper {
    ${flexSpBetween};
    gap: 2rem;
    /* outline: 1px solid; */
  }

  .left-items {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      font-size: ${rem(18)};
      white-space: nowrap;
    }
  }

  .search-wrapper {
    position: relative;
    width: min(70%, ${rem(350)});

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1rem;
    }

    input {
      width: 100%;
      font-family: inherit;
      padding: 0.9em 0.2em 0.9em 3em;
      background: ${theme.colors.white};
      border-radius: 5px;

      &::placeholder {
        font-family: inherit;
      }
    }
  }

  .right-items {
    ${mq(bp.small)} {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .notification {
      display: none;

      ${mq(bp.small)} {
        display: block;
        font-size: 1.5rem;
      }
    }

    .profile-menu {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: rgb(0, 0, 0, 0);

      svg {
        fill: ${theme.colors.black};
        transition: transform 0.2s, fill 0.2s;

        &.open {
          transform: rotate(180deg);
          fill: ${theme.colors.gray400};
        }
      }

      .drop-down {
        visibility: hidden;
        position: absolute;
        right: 0;
        top: 120%;
        padding-block: 0.25rem;
        background-color: ${theme.colors.bg};
        border-radius: 3px;
        height: fit-content;
        z-index: 10;
        outline: 1px solid ${theme.colors.gray400};
        transform: translateY(5%);
        transition: transform 0.2s, opacity 0.2s;
        /* outline: 1px solid red; */

        &.open {
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        }

        &-item {
          /* outline: 1px solid brown; */
          padding: 0.5rem 2rem;
          transition: background-color 0.2s;

          button {
            background: none;
          }

          &:hover {
            background-color: ${theme.colors.gray200};
          }
        }
      }
    }

    .avatar {
      ${size("35px")};
      border-radius: 50%;
      background-color: ${theme.colors.gray300};
      overflow: hidden;
    }

    .hamburger-btn {
      padding: 0.7em 1.5em;
      background-color: ${theme.colors.gray300};
    }
  }
`;
