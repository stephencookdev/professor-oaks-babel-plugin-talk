import React from "react";
import { Slide, HighlightList, Step } from "zlides";
import { CodeFromTo } from "../helpers/code";

const safeGetExample = `const wisdom = trainer?.inventory?.helixFossil?.()`;
const safeGetExampleTranspiled = `const wisdom = trainer
  && trainer.inventory
  && trainer.inventory.helixFossil
  && trainer.inventory.helixFossil()`;

const jsxExample = `<a href="bible.com">aaabaaajss</a>`;
const jsxExampleTranspiled = `React.createElement(
  'a',
  { href: 'bible.com' },
  'aaabaaajss',
)`;

const tsExample = `const pikachu: int = 25`;
const tsExampleTranspiled = `const pikachu = 25`;

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
          <CodeFromTo
            from={{
              value: safeGetExample,
            }}
            to={{
              value: safeGetExampleTranspiled,
            }}
            codeMirrorOptions={{ mode: "javascript" }}
          />
        </Step>

        <Step index={2} exact>
          <CodeFromTo
            from={{
              value: jsxExample,
            }}
            to={{
              value: jsxExampleTranspiled,
            }}
            codeMirrorOptions={{ mode: "jsx" }}
          />
        </Step>

        <Step index={3} exact>
          <CodeFromTo
            from={{
              value: tsExample,
            }}
            to={{
              value: tsExampleTranspiled,
            }}
            codeMirrorOptions={{ mode: "javascript" }}
          />
        </Step>
      </div>
    </div>
  </Slide>
);
