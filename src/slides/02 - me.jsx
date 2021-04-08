import React from "react";
import { Slide, Social, Step } from "zlides";
import work from "../utils/work";

export default () => (
  <Slide title>
    <Step exact index={0}>
      <Social twitter="@StephenCookDev" />
    </Step>

    <Step exact index={1}>
      <Social work={work} />
    </Step>
  </Slide>
);

export const skip = true;
