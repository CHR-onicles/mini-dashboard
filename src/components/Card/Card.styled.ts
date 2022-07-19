import styled from "styled-components";
import { alpha, bp, mq, rem } from "../../styles/Utilities.styled";

export const StyledCard = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: ${rem(200)};
  background-color: white;
  box-shadow: 0 3px 3px 0 ${alpha("#000000", 0.08)},
    0 5px 15px 0 ${alpha("#000000", 0.08)};
  border-radius: 3px;

  ${mq(bp.small)} {
    width: min(100%, ${rem(300)});
  }

  p {
    font-size: 1.5rem;
  }
`;
