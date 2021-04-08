import React from "react";
import { present, Presentation } from "zlides";
import { lucario } from "zlides/themes";

const slides = require("./slides/*.jsx");
const sandboxes = require("./sandboxes/**/*.*");

present(
  <Presentation
    title="Professor Oak's Guide to Babel Plugin Development"
    slides={slides}
    sandboxes={sandboxes}
    theme={lucario}
  />
);
