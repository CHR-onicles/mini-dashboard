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

  .wrapper {
    ${flexSpBetween};
    gap: 1rem;
  }

  .hamburger {
    font-size: 1.6rem;
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
      background: ${theme.colors.gray100};
      border-radius: 5px;

      &::placeholder {
        font-family: inherit;
      }
    }
  }

  .right-icons {
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
  }
`;
