import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  interface Theme extends IBreakpoint {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }
}

interface IBreakpoint {
  breakpoint: {
    small: string;
    medium: string;
    large: string;
  };
}

const breakpoint = {
  small: "360px",
  medium: "768px",
  large: "1024px",
};

export const theme: Theme = {
  breakpoint,
};
