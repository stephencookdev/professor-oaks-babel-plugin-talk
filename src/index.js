import React from "react";
import { present, Presentation, Slide } from "zlides";
import { lucario } from "zlides/themes";

const sandboxes = require("./sandboxes/**/*.*");

const roughSlides = [
  "what is babel",
  "what we use babel for at LDT",
  "what plugins exist in the wild (e.g. the _ + _ holes one)",
  "what can Professor Oak could use it for (e.g. we can make this business specific)",
  "what can a plugin do (and what can it not do) (idea that there are limits)",
  "what can a plugin do (and what can it not do) (break down the 3 stages of transpilation)",
  "what can a plugin do (and what can it not do) (highlight the AST transform)",
  "what can a plugin do (and what can it not do) (demo what this means)",
  "how do we make a plugin (overview)",
  "how do we make a plugin (;;p demo)",
  "how do we make a plugin (;;384 demo)",
  "how do we make a plugin (;;water-types demo)",
  "recap",
];

const slides = {
  Slide001: () => (
    <Slide title>
      <h1>Babel Plugin Development</h1>
      <h2 className="subtitle">Professor Oak's Guide</h2>
    </Slide>
  ),
  ...Object.fromEntries(
    roughSlides.map((s, i) => [
      `Slide${(i + 2 + "").padStart(3, "0")}`,
      () => <Slide title>{s}</Slide>,
    ])
  ),
};

present(
  <Presentation
    title="Professor Oak's Guide to Babel Plugin Development"
    slides={slides}
    sandboxes={sandboxes}
    theme={lucario}
  />
);
