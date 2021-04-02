import React from "react";
import { present, Presentation, Slide } from "zlides";
import { dratini } from "zlides/themes";

const slides = {
  Slide1: () => (
    <Slide title>
      <h1>Hello World</h1>
    </Slide>
  ),
  Slide2: () => <Slide>Test again</Slide>
};

present(
  <Presentation
    title="Professor Oak's Guide to Babel Plugin Development"
    slides={slides}
    theme={dratini}
  />
);
