import React from "react";
import { HighlightList, Slide, Step } from "zlides";

export default () => (
  <Slide>
    <h1>Examples of Plugins</h1>
    <div className="centerWithHeader sidebyside">
      <ul>
        <li>
          babel-plugin-
          <HighlightList
            items={["holes", "partial-application", "console-source"]}
          />
        </li>
      </ul>

      <div className="fixedImageContainer">
        <Step index={1} exact>
          code sample of `const sum = _ + _`
        </Step>
        <Step index={2} exact>
          code sample of `const add2 = sum(2, _)`
        </Step>
        <Step index={3} exact>
          code sample of `console.log(1)` getting file source included
        </Step>
      </div>
    </div>
  </Slide>
);
