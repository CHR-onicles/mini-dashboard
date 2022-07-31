import styled from "styled-components";
import {
  bp,
  mq,
  rem,
  size,
  theme,
} from "../../styles/Utilities.styled";

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
    border-spacing: 3.5rem 1rem;
    /* border: 1px solid; */
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
      ${size(rem(55))};
    }

    .name {
      font-size: ${rem(17)};
      font-weight: 700;
    }
  }
`;
