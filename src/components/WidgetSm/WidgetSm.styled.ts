import styled from "styled-components";
import {
  bp,
  flexSpBetween,
  mq,
  rem,
  size,
  theme,
} from "../../styles/Utilities.styled";

export const StyledWidgetSm = styled.div`
  padding: 2rem;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.cardBoxShadow};

  ${mq(bp.xlarge)} {
    flex: 2;
  }

  h3 {
    font-size: ${rem(17)};
  }

  .people {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 1rem;
  }

  .person {
    ${flexSpBetween};
    align-items: center;

    .img-wrapper {
      border-radius: 50%;
      overflow: hidden;
      ${size(rem(55))};
    }

    .text-wrapper {
      margin-left: -3rem;

      .name {
        font-size: ${rem(17)};
        font-weight: 700;
      }
      .role {
        font-size: ${rem(15)};
      }
    }

    button {
      font-weight: 700;
      background: none;
    }
  }
`;
