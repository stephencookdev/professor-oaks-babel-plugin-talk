import React from "react";
import { Slide, HighlightList, Step } from "zlides";

export default () => (
  <Slide>
    <h1>What is Babel</h1>

    <div className="centerWithHeader sidebyside">
      <HighlightList
        items={[
          "Toolchain to transpile JS",
          "Takes JS code, spits out JS code",
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
