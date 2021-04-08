import React from "react";
import { HighlightList, Slide, Step } from "zlides";

import mrMimeLimits from "../assets/mr-mime-limits.gif";

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
          diagram of transpilation stages
        </Step>

        <Step index={2} exact>
          diagram highlghting AST transformation step
        </Step>
      </div>
    </div>
  </Slide>
);
