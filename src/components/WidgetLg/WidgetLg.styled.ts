import styled from "styled-components";
import { bp, mq, rem, size, theme } from "../../styles/Utilities.styled";

export const StyledWidgetLg = styled.div`
  padding: 2rem;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.cardBoxShadow};

  ${mq(bp.xlarge)} {
    flex: 4;
  }

  h3 {
    font-size: ${rem(17)};
  }

  .table {
    width: 100%;
    margin-top: 2rem;
    font-size: ${rem(15)};
    /* border: 1px solid; */

    td:not(:last-child) {
      padding-right: 3rem;
    }

    td {
      padding-block: 0.25rem;
    }
  }

  .table-header {
    th {
      text-align: left;
    }
  }

  .person {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    .img-wrapper {
      border-radius: 50%;
      overflow: hidden;
      ${size(rem(50))};
    }

    .name {
      font-size: ${rem(15)};
      font-weight: 600;
    }
  }
`;
