import styled, { keyframes } from "styled-components";
import { rem, size, theme } from "../../styles/Utilities.styled";

const svgAppear = keyframes`
    to {
      stroke-dashoffset: 0;
    }
`;

const svgFill = keyframes`
    from {
      fill: rgb(0, 0, 0, 0);
    }
    to {
      fill: white;
    }
`;

const preloaderOut = keyframes`
    to {
      /* transform: translateY(-100%); */
      transform: scale(2);
      opacity: 0;
    }
`;

export const StyledPreloader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primary};
  position: absolute;
  inset: 0;
  z-index: 999;
  animation: ${preloaderOut} 1s 5.5s cubic-bezier(0.52, 0.01, 0, 1) forwards;

  #logo {
    ${size(`min(70vw, ${rem(350)})`)}
    animation: ${svgFill} 0.5s 4s ease forwards;
  }

  #logo path:nth-child(1) {
    stroke-dasharray: 451;
    stroke-dashoffset: 451;
    animation: ${svgAppear} 3s 1s ease forwards;
  }
  #logo path:nth-child(2) {
    stroke-dasharray: 563;
    stroke-dashoffset: 563;
    animation: ${svgAppear} 3s 1.3s ease forwards;
  }
  #logo path:nth-child(3) {
    stroke-dasharray: 417;
    stroke-dashoffset: 417;
    animation: ${svgAppear} 3s 1.5s ease forwards;
  }
`;
