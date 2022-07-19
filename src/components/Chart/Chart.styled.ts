import styled from "styled-components";
import { alpha } from "../../styles/Utilities.styled";

export const StyledChart = styled.div`
padding: 1.5rem 2rem;
  background-color: white;
  box-shadow: 0 3px 3px 0 ${alpha("#000000", 0.08)},
    0 5px 15px 0 ${alpha("#000000", 0.08)};
    border-radius: 3px;
`;
