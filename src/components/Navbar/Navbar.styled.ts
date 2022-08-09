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
  padding-top: 1rem;
  width: 95%;
  margin-inline: auto;

  .wrapper {
    ${flexSpBetween};
    gap: 1rem;
    /* outline: 1px solid; */
  }

  .logo {
    display: none;
    font-size: ${rem(18)};
    font-weight: 700;

    ${mq(bp.small)} {
      display: block;
    }
  }

  .hamburger-btn {
    font-size: 1.6rem;
    background: none;

    ${mq(bp.small)} {
      display: none;
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
        font-size: 1.8rem;
      }
    }

    .avatar {
      ${size("35px")};
      border-radius: 50%;
      background-color: ${theme.colors.gray300};
      overflow: hidden;
    }

    button {
      padding: 0.7em 1.5em;
      background-color: ${theme.colors.gray300};
    }
  }
`;
