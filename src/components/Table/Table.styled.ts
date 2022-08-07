import styled from "styled-components";
import {
  alpha,
  flexCenter,
  rem,
  size,
  theme,
} from "../../styles/Utilities.styled";

export const StyledTable = styled.div`
  ${size("fit-content")};
  padding: 1rem;
  background-color: ${theme.colors.white};

  table {
    text-align: left;
    border-spacing: 0;
    /* border: 1px solid black; */

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      &:not(thead > tr) {
        /* background-color: ${theme.colors.gray200}; */
        font-size: ${rem(14)};
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
      ${flexCenter};
      display: inline-flex;
      padding: 0.35rem 0.5rem;
      margin-right: 0.25rem;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid ${alpha(theme.colors.black, 0.6)};
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${theme.colors.gray200};
      }

      &[title="Delete"]:hover {
        background-color: hsl(0, 100%, 92%);

        svg {
          fill: hsl(0, 100%, 45%);
        }
      }

      svg {
        font-size: ${rem(14)};
      }
    }
  }
`;
