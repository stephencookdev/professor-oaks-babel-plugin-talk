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
          code sample of `myObject?.someProperty` converting to `myObject ?
          myObject.someProperty : undefined`
        </Step>

        <Step index={2} exact>
          code sample of JSX turning to React.createElement
        </Step>

        <Step index={3} exact>
          code sample of types being pulled out
        </Step>
      </div>
    </div>
  </Slide>
);
