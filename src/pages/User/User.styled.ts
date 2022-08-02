import styled from "styled-components";
import { flexSpBetween, rem, size, theme } from "../../styles/Utilities.styled";

export const StyledUser = styled.div`
  padding: 2rem;

  .header-wrapper {
    ${flexSpBetween};
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
    }

    button {
      padding: 0.7rem 1.2rem;
    }
  }

  .container {
    display: flex;
    gap: 2rem;
  }

  .detail-view {
    flex: 2;
    padding: 1rem;
    background-color: ${theme.colors.white};

    .person {
      display: flex;
      gap: 1rem;
      align-items: center;

      .img-wrapper {
        border-radius: 50%;
        overflow: hidden;
        ${size(rem(55))};
      }

      .text-wrapper {

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

    .section-title {
        color: ${theme.colors.gray400};
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    p {
      margin-block: 0.5rem;
    }
  }

  .form-view {
    flex: 4;
    padding: 1rem;
    background-color: ${theme.colors.white};
  }
`;
