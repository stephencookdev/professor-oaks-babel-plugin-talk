import React from "react";
import { Slide, Social } from "zlides";
import work from "../utils/work";

export default () => (
  <Slide title>
    <Social
      twitter="@StephenCookDev"
      url="https://stephencook.dev"
      work={work}
    />
  </Slide>
);

export const skip = true;
