import React from "react";
import { Slide, HighlightList, Step } from "zlides";

export default () => (
  <Slide>
    <h1>What We Use Babel For</h1>

    <div className="centerWithHeader sidebyside">
      <HighlightList
        items={[
          "Support older browsers",
          "Turn JSX into real JS",
          "Turn TS into JS",
        ]}
      />

      <div className="fixedImageContainer">
        <Step index={1} exact>
          img
        </Step>

        <Step index={2} exact>
          img 2
        </Step>
      </div>
    </div>
  </Slide>
);
