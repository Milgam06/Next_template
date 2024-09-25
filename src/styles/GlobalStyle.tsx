"use client";

import { Global, css } from "@emotion/react";

import { reset } from "./reset";

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &:focus {
          outline: none;
        }
      }
      html {
        width: 100%;
        height: 100%;
        font-size: 10px;
        color: #000;
      }
      body {
        @media screen and (min-width: 2000px) {
          font-size: 16px;
        }
      }
    `}
  />
);
