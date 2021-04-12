import React from "react";
import { Slide, HighlightList, Step, Code } from "zlides";

import { CodeFromTo } from "../helpers/code";

const pokeExample = `<div>
  ;;384 is an ;;t:electric dragon ;;p
</div>`;
const pokeExampleTranspiled = `<div>
  Rayquaza is an
  <a href="#">electric-type</a>
  dragon pokémon
</div>`;

import oakSad from "../assets/oak-sad.gif";
import contraption from "../assets/contraption.gif";
import typing from "../assets/typing.gif";

export default () => (
  <Slide>
    <h1>PokéPlugins</h1>

    <div className="centerWithHeader sidebyside">
      <HighlightList
        items={[
          "Upkeep warning",
          "Application-specific plugins",
          { text: "A keystroke-saving example", count: 3 },
        ]}
      />

      <div className="fixedImageContainer">
        <Step step="1-" iterate>
          <img src={oakSad} />

          <img src={contraption} />

          <img src={typing} />

          <Code
            value={pokeExampleTranspiled}
            codeMirrorOptions={{ mode: "jsx" }}
          />

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
