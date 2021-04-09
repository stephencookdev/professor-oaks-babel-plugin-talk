import React from "react";
import { Slide, SandboxLink, Step, Code } from "zlides";

import parseTransformGenerate from "../assets/parse-transform-generate.png";

const astTraverseExample = `const PokePlugin = function ({ types }) {
  const PokeVisitor = {
    StringLiteral(path) {
      path.replaceWith(...)
    }
  }
  return { visitor: PokeVisitor }
}`;

export default () => (
  <Slide>
    <h1>Gotta Transpile 'Em All</h1>
    <div className="centerWithHeader sidebyside hugeText">
      <Step index={0} exact>
        <div style={{ textAlign: "left" }}>
          <Code
            value={astTraverseExample}
            codeMirrorOptions={{ mode: "javascript" }}
          />
        </div>
        <img src={parseTransformGenerate} style={{ height: "75vh" }} />
        <span style={{ fontSize: "16px" }}>(highlight some nodes)</span>
      </Step>

      <Step index={1} exact>
        <SandboxLink to="complete">Demo</SandboxLink>
      </Step>

      <Step index={2} exact>
        <a href="https://astexplorer.net/" target="_blank">
          AST Explorer
        </a>
      </Step>
    </div>
  </Slide>
);
