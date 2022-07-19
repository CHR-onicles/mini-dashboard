import styled from "styled-components";
import { bp, mq, rem, theme } from "../../styles/Utilities.styled";

export const StyledCard = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: ${rem(200)};
  background-color: white;
  box-shadow: ${theme.cardBoxShadow};
  border-radius: 3px;

  ${mq(bp.small)} {
    width: min(100%, ${rem(300)});
  }

  p {
    font-size: 1.5rem;
  }
`;
