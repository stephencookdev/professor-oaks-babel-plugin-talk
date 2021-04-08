import React from "react";
import { Slide } from "zlides";

import goodbye from "../assets/goodbye.gif";

export default () => (
  <Slide title>
    <h1>That's all folks!</h1>

    <div className="centerWithHeader">
      <img src={goodbye} />
    </div>
  </Slide>
);
