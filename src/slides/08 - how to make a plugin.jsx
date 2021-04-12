import React from "react";
import { Slide, SandboxLink, Step, Code } from "zlides";

import AstPost from "../assets/AstPost";

const astTraverseExample = `const PokePlugin = function ({ types }) {
  const PokeVisitor = {
    CallExpression(path) {
      path.replaceWith(...)
    }
  }
  return { visitor: PokeVisitor }
}`;

export default () => (
  <Slide>
    <h1>Gotta Transpile 'Em All</h1>
    <div className="centerWithHeader sidebyside hugeText">
      <Step step="0-1">
        {(step) => (
          <>
            <div style={{ textAlign: "left" }}>
              <Code
                value={astTraverseExample}
                codeMirrorOptions={{ mode: "javascript" }}
              />
            </div>

            <AstPost activateSubBranch={step === 1} />
          </>
        )}
      </Step>

      <Step step="2-" iterate>
        <SandboxLink to="complete">Demo</SandboxLink>

        <a href="https://astexplorer.net/" target="_blank">
          AST Explorer
        </a>
      </Step>
    </div>
  </Slide>
);
