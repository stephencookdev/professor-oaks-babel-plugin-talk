import React from "react";
import { Slide, Step } from "zlides";

export default () => (
  <Slide>
    <h1>Recap</h1>

    <ul>
      <li>Babel transpiles JS</li>
      <li>Plugins can modify AST step</li>
      <Step step={1}>
        <li>Rayquaza is a pain to type, and no-one has time for that</li>
      </Step>
    </ul>
  </Slide>
);
