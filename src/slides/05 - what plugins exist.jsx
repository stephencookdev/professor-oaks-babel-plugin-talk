import React from "react";
import { HighlightList, Slide, Step } from "zlides";
import { CodeFromTo } from "../helpers/code";

const holesExample = `const sum = _ + _`;
const holesExampleTranspiled = `const sum = (a, b) => a + b`;

const partialExample = `const sum = (a, b) => a + b
const add2 = sum(2, _)`;
const partialExampleTranspiled = `const sum = (a, b) => a + b
const add2 = a => sum(2, a)`;

const consoleExample = `console.log('anarchy')`;
const consoleExampleTranspiled = `console.log('falseProphet.js (3:8)', 'anarchy')`;

export default () => (
  <Slide>
    <h1>Examples of Plugins</h1>
    <div className="centerWithHeader sidebyside">
      <ul>
        <li>
          babel-plugin-
          <HighlightList
            items={["holes", "partial-application", "console-source"]}
          />
        </li>
      </ul>

      <div className="fixedImageContainer">
        <Step index={1} exact>
          <CodeFromTo
            from={{
              value: holesExample,
            }}
            to={{
              value: holesExampleTranspiled,
            }}
            codeMirrorOptions={{ mode: "javascript" }}
          />
        </Step>
        <Step index={2} exact>
          <CodeFromTo
            from={{
              value: partialExample,
            }}
            to={{
              value: partialExampleTranspiled,
            }}
            codeMirrorOptions={{ mode: "javascript" }}
          />
        </Step>
        <Step index={3} exact>
          <CodeFromTo
            from={{
              value: consoleExample,
            }}
            to={{
              value: consoleExampleTranspiled,
            }}
            codeMirrorOptions={{ mode: "javascript" }}
          />
        </Step>
      </div>
    </div>
  </Slide>
);
