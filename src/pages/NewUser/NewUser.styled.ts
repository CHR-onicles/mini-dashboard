import styled from "styled-components";
import { flexColumn, theme } from "../../styles/Utilities.styled";

export const StyledNewUser = styled.div`
  h2 {
    font-size: 2rem;
  }

  form {
    display: flex;
    gap: 2.5rem;
    margin-top: 2rem;
    width: 100%;

    .left,
    .right {
      ${flexColumn};
      gap: 1rem;
      flex-basis: 50%;
    }

    .wrapper {
      ${flexColumn};
      gap: 0.5rem;

      label:not(.radio-btns > label) {
        color: ${theme.colors.gray700};
      }

      input {
        padding: 0.7rem 1rem;
      }

      .radio-btns > label {
        margin-right: 0.75rem;
      }
    }
  }

  button {
    background-color: ${theme.colors.gray300};
    padding: 0.75rem 2.5rem;
    margin-top: 2rem;
  }
`;