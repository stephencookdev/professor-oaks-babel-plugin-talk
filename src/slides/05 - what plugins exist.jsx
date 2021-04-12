import React from "react";
import { HighlightList, Slide, Step } from "zlides";
import { CodeFromTo } from "../helpers/code";

const holesExample = `const sum = _ + _`;
const holesExampleTranspiled = `const sum = (a, b) => a + b`;

const functionComposition = `const bumpySin = Math.floor & Math.sin`;
const functionCompositionTranspiled = `const bumpySin = (...args) =>
  Math.sin(
    Math.floor(...args)
  )`;

const consoleExample = `console.log('anarchy')`;
const consoleExampleTranspiled = `console.log(
  'falseProphet.js (3:8)',
  'anarchy',
)`;

export default () => (
  <Slide>
    <h1>Examples of Plugins</h1>
    <div className="centerWithHeader sidebyside">
      <ul>
        <li>
          babel-plugin-
          <HighlightList
            items={["holes", "function-composition", "console-source"]}
          />
        </li>
      </ul>

      <div className="fixedImageContainer">
        <Step step="1-" iterate>
          <CodeFromTo
            from={{
              value: holesExample,
            }}
            to={{
              value: holesExampleTranspiled,
            }}
            codeMirrorOptions={{ mode: "javascript" }}
          />

          <CodeFromTo
            from={{
              value: functionComposition,
            }}
            to={{
              value: functionCompositionTranspiled,
            }}
            codeMirrorOptions={{ mode: "javascript" }}
          />

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
