import React from "react";
import { Slide, HighlightList, Step } from "zlides";

import oakSad from "../assets/oak-sad.gif";
import typing from "../assets/typing.gif";

export default () => (
  <Slide>
    <h1>PokéPlugins</h1>

    <div className="centerWithHeader sidebyside">
      <HighlightList
        items={[
          "Application-specific plugins",
          "Upkeep warning",
          "A keystroke-saving example",
        ]}
      />

      <div className="fixedImageContainer">
        <Step index={2} exact>
          <img src={oakSad} />
        </Step>

        <Step index={3} exact>
          <img src={typing} />
        </Step>

        <Step index={4} exact>
          code sample of desired plugin example
        </Step>
      </div>
    </div>
  </Slide>
);
