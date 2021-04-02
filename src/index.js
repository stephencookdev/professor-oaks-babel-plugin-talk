import React from "react";
import ReactDOM from "react-dom";
import { Presentation, Slide } from "zlides";
import { dratini } from "zlides/themes";

const slides = {
  Slide1: () => (
    <Slide title>
      <h1>Hello World</h1>
    </Slide>
  ),
  Slide2: () => <Slide>Test again</Slide>
};

ReactDOM.render(
  <Presentation slides={slides} theme={dratini} />,
  document.getElementById("mount")
);
document.dispatchEvent(new Event("post-react-render"));

console.log("Some dev shortcuts:");
console.table({
  "toggleDarkMode()": "Change code samples between light/dark mode"
});
