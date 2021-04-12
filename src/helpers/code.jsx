import React from "react";
import { Code } from "zlides";
import FromTo from "./fromTo";

export const CodeFromTo = ({ from, to, ...rest }) => {
  return (
    <FromTo>
      <Code {...from} {...rest} />
      <Code {...to} {...rest} />
    </FromTo>
  );
};
