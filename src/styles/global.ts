import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const global = css`
  ${emotionNormalize}

  @font-face {
    font-family: "Karla";
    font-weight: 500;
    src: url("/fonts/Karla-Regular.ttf");
  }
  @font-face {
    font-family: "Karla";
    font-weight: 700;
    src: url("/fonts/Karla-Bold.ttf");
  }
  @font-face {
    font-family: "Karla";
    font-weight: 800;
    src: url("/fonts/Karla-ExtraBold.ttf");
  }

  @font-face {
    font-family: "Markazi Text";
    font-weight: 400;
    src: url("/fonts/MarkaziText-Medium.ttf");
  }

  .headline-text {
    font-family: "Markazi Text";
  }

  html,
  body {
    font-family: Karla, Markazi Text, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  ul,
  li,
  h1,
  p,
  div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  button {
    background-color: transparent;
    border: initial;

    &:hover {
      cursor: pointer;
    }
  }
`;
