import styled from "styled-components";
import {
  flexColumn,
  flexSpBetween,
  rem,
  size,
  theme,
} from "../../styles/Utilities.styled";

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
    padding: 2rem;
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

    .account-details,
    .contact-details {
      ${flexColumn};
      gap: 0.25rem;
      margin-top: 2rem;

      .section-title {
        margin-bottom: 0.7rem;
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: ${rem(15)};
      }
    }

    .section-title {
      color: ${theme.colors.gray400};
      font-weight: 500;
    }
  }

  .form-view {
    flex: 4;
    padding: 2rem;
    background-color: ${theme.colors.white};

    .form-title {
      font-size: 2rem;
    }

    .flex {
      display: flex;
      gap: 2rem;
    }

    form {
      ${flexColumn};
      gap: 1.25rem;
      flex-basis: 50%;
      margin-top: 2rem;

      .wrapper {
        ${flexColumn};
        gap: 0.25rem;

        input {
          padding: 0 0.5rem 0.4rem 0;
          font-size: ${rem(14)};
          border-bottom: 1px solid ${theme.colors.black};

          &::placeholder {
            color: ${theme.colors.gray400};
          }

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
        padding: 0.8em 2.5em;
        font-size: ${rem(14)};
        background-color: ${theme.colors.gray300};
      }
    }
  }
`;
