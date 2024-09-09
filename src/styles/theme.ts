import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  interface Theme extends IBreakpoint {
    [key: string]: any;
  }
}

interface IBreakpoint {
  breakpoint: {
    xs: string;
    md: string;
    lg: string;
  };
}

interface IOrdinalNumbers {
  primary?: string;
  secondary?: string;
}

interface IColors {
  main: IOrdinalNumbers;
  sub: IOrdinalNumbers;
  highlight: IOrdinalNumbers;
}

const breakpoint = {
  xs: "360px",
  md: "768px",
  lg: "1024px",
};

export const theme: Theme = {
  breakpoint,
};

const colors: IColors = {
  main: { primary: "#495E57", secondary: "#F4CE14" },
  sub: { primary: "#EE9972", secondary: "#FBDABB" },
  highlight: { primary: "#EDEFEE", secondary: "#333333" },
};
