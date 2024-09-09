import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const global = css`
  ${emotionNormalize}
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
