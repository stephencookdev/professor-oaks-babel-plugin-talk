import React from "react";
import { Slide, HighlightList, Step } from "zlides";

import babelFish from "../assets/babel-fish.gif";
import mewTwo from "../assets/mew-two.gif";

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
        <Step step="1-" iterate>
          <img src={babelFish} />
          <img src={mewTwo} />
        </Step>
      </div>
    </div>
  </Slide>
);
