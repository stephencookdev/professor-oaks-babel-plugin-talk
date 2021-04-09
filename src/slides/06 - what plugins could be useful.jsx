import React from "react";
import { Slide, HighlightList, Step } from "zlides";

import { CodeFromTo } from "../helpers/code";

const pokeExample = `<div>
  ;;384 is an ;;t:electric dragon god ;;p
</div>`;
const pokeExampleTranspiled = `<div>
  Rayquaza is an
  <a href="#">electric-type</a>
  dragon god pokémon
</div>`;

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
          <CodeFromTo
            from={{
              value: pokeExample,
            }}
            to={{
              value: pokeExampleTranspiled,
            }}
            codeMirrorOptions={{ mode: "jsx" }}
          />
        </Step>
      </div>
    </div>
  </Slide>
);
