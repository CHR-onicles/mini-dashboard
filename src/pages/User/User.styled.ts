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

    a {
      background-color: ${theme.colors.gray300};
      padding: 0.7rem 2rem;
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

    .form-title {
      font-size: 2rem;
    }

    .flex {
      display: flex;
      gap: 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex-basis: 50%;
      margin-top: 2rem;

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        input {
          border-bottom: 1px solid black;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .right-side {
      display: flex;
      flex-basis: 50%;
      justify-content: flex-end;
      align-items: flex-end;
      width: 100%;
      /* outline: 1px solid; */

      button {
        padding: 0.8rem 2.5rem;
        background-color: ${theme.colors.gray300};
      }
    }
  }
`;
