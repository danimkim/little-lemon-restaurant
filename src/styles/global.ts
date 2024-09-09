import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const global = css`
  ${emotionNormalize}

  @font-face {
    font-family: "Karla";
    font-weight: 500;
    src: url("public/fonts/Karla-Regular.ttf");
  }

  @font-face {
    font-family: "Markazi Text";
    font-weight: 400;
    src: url("public/fonts/MarkaziText-Medium.ttf");
  }

  html,
  body {
    font-family: Karla, Markazi Text, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
