import styled from "styled-components";
import { flexCenter, theme } from "../../styles/Utilities.styled";

export const StyledHome = styled.div`
  ${flexCenter};
  position: fixed;
  width: 100%;
  inset: 0;
  background-color: ${theme.colors.bg};
  z-index: 999;

  .content {
    max-height: 100vh;
    overflow-y: auto;

    h2 {
      font-size: 2rem;
    }

    button {
      margin-top: 2rem;
      padding: 0.7em 1.5em;
      background-color: ${theme.colors.gray300};
    }
  }
`;
