import styled from "styled-components";
import { flexSpBetween, theme } from "../../styles/Utilities.styled";

export const StyledUserList = styled.div`
.wrapper {
  ${flexSpBetween};
  align-items: center;
  margin-bottom: 1rem;
  width: 99%;

  a {
    padding: 0.7em 2em;
    background-color: ${theme.colors.gray300};
  }

}
`;
