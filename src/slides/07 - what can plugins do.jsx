import React from "react";
import { HighlightList, Slide, Step } from "zlides";

import mrMimeLimits from "../assets/mr-mime-limits.gif";
import parseTransformGenerate from "../assets/parse-transform-generate.png";

export default () => (
  <Slide>
    <h1>Plugin Limitations</h1>

    <div className="centerWithHeader sidebyside">
      <HighlightList
        items={[
          "There are limits",
          "3 stages of transpilation",
          "Plugins control AST transforms",
        ]}
      />

      <div className="fixedImageContainer">
        <Step index={1} exact>
          <img src={mrMimeLimits} />
        </Step>

        <Step index={2} exact>
          <img src={parseTransformGenerate} style={{ height: "75vh" }} />
        </Step>

        <Step index={3} exact>
          <img src={parseTransformGenerate} style={{ height: "75vh" }} />
          (highlight 'transform')
        </Step>
      </div>
    </div>
  </Slide>
);
