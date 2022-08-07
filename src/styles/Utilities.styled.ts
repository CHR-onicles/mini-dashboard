import { css } from "styled-components";

// Helper function to convert from px to rem (1rem = 16px by browser default)
export const rem = (value: number, omitUnit = false): string => {
  return `${value / 16}${omitUnit === true ? "" : "rem"}`;
};

// Helper function to add alpha values to rgb and hsl colors
export const alpha = (color: string, opacity = 1): string => {
  const hex_pattern = /^#([A-Fa-f0-9]{6})$/;
  const hsl_pattern =
    /hsl\(\s*([0-2]?[0-9]{1,2}|3[0-5][0-9]|360)\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*(0|[1-9][0-9]?|100)%\s*\)/; // chose to be explicit on the digits to prevent evaluating wrong digits
  const hsl_pattern_with_opacity =
    /hsla?\(\s*([0-2]?[0-9]{1,2}|3[0-5][0-9]|360)\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*0(\.\d+)?|1\s*\)/;
  let newColor = "";

  if (opacity < 0 || opacity > 1) {
    throw new Error("Opacity must be between 0 and 1 inclusive");
  }
  const formatted_opacity = +String(opacity).padStart(3, "0");

  if (color.includes("#")) {
    if (!hex_pattern.test(color))
      throw new Error(
        "Invalid hexadecimal - Value provided must follow the 6-character syntax (#FFFFFF)"
      );
    else
      return `${color}${Math.floor(formatted_opacity * 255)
        .toString(16)
        .padStart(2, "0")}`;
  }

  if (hsl_pattern.test(color)) {
    newColor = color.slice(0, color.length - 1) + `,${formatted_opacity})`;
  } else if (hsl_pattern_with_opacity.test(color)) {
    let temp = color.split(",");
    newColor = temp.reduce((acc, item, index) => {
      if (index === temp.length - 1) return `${acc},${String(opacity)})`;
      if (index > 0) return acc + "," + item;
      else return acc + item;
    }, "");
  }

  // console.log(newColor, color);
  if (!newColor)
    throw new Error("Invalid color provided - only hex and hsl are supported"); // ignore rgb - might as well make it hsl :)
  return newColor;
};

// Breakpoints object with values from mobile up
export const bp = {
  small: `${rem(768, true)}em`,
  medium: `${rem(1024, true)}em`,
  large: `${rem(1200, true)}em`,
  xlarge: `${rem(1440, true)}em`,
  xxlarge: `${rem(2100, true)}em`,
};

export const theme = {
  colors: {
    primary: "#153d6f",

    bg: "#f5f5f5",

    // neutral
    white: "hsl(0, 100%, 100%)",
    black: "hsl(0, 5%, 17%)",
    gray100: "hsl(210, 0%, 98%)",
    gray200: "hsl(210, 0%, 90%)",
    gray300: "hsl(210, 0%, 80%)",
    gray400: "hsl(0, 0%, 54%)",
    gray700: "hsl(0, 0%, 34%)",
  },
  fonts: {
    primary: `'Poppins', sans-serif`,
  },
  ease: {
    // easing functions
    slowStart: "cubic-bezier(0.52, 0.01, 0, 1)",
    quickStartAndEnd: "cubic-bezier(0.19, 1, 0.22, 1)",
    almostLinear: "cubic-bezier(0.4,0.6,0.6,1)",
    textReveal: "cubic-bezier(0.77, 0, 0.175, 1)",
  },
  cardBoxShadow: `0 3px 3px 0 ${alpha("#000000", 0.08)},
  0 5px 15px 0 ${alpha("#000000", 0.08)};`,
};

/*********************************************************************
CSS UTILITIES (like Sass mixins)
**********************************************************************/
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexSpBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const pseudo = css`
  content: "";
  position: absolute;
`;

export const size = (width: string, height = width) => {
  return css`
    width: ${width};
    height: ${height};
  `;
};

export const mq = (breakpoint: string) => {
  return css`
    @media screen and (min-width: ${breakpoint});
  `;
};
