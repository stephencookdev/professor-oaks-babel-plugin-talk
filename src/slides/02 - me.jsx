import React from "react";
import { Slide, Social, Step } from "zlides";
import work from "../utils/work";

export default () => (
  <Slide title>
    <Step iterate>
      <Social twitter="@StephenCookDev" />
      <Social work={work} />
    </Step>
  </Slide>
);

export const skip = true;
