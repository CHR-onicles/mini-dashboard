import styled from "styled-components";
import { size, theme } from "../../styles/Utilities.styled";

export const StyledTable = styled.div`
  ${size('100%', 'fit-content')};
  padding: 1rem;
  background-color: ${theme.colors.white};

  table {
    border-spacing: 0;
    /* border: 1px solid black; */

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1rem 2rem;
      /* border-bottom: 1px solid black; */
      /* border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }
    }

    button {
        padding: 0.5rem 1rem;
        margin-right: 1rem;
    }
  }
`;
