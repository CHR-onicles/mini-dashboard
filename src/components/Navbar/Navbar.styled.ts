import styled from "styled-components";
import { flexSpBetween, rem, size, theme } from "../../styles/Utilities.styled";

export const StyledNavbar = styled.div`
  margin-top: 1rem;

  .wrapper {
    ${flexSpBetween};
  }

  .hamburger {
    font-size: 1.6rem;
  }

  .search-wrapper {
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 7%;
    }

    input {
      width: min(100%, ${rem(300)});
      font-family: inherit;
      padding: 0.9em 0.2em 0.9em 3em;
      background: ${theme.colors.gray100};
      border-radius: 5px;

      &::placeholder {
        font-family: inherit;
      }
    }
  }

  .avatar {
    ${size("35px")};
    border-radius: 50%;
    background-color: ${theme.colors.gray300};
  }
`;
