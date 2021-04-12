import React from "react";
import ReactDOM from "react-dom";
import { Code } from "zlides";

import rawJsxString from "./main";

const mainGen =
  typeof rawJsxString === "string"
    ? `(function(React) { return ${rawJsxString.replace("\n", " ")} })`
    : "(function(){return null})";
const main = eval(mainGen)(React);

const App = () => (
  <>
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>{main}</div>

      <div style={{ zoom: 2 }}>
        <Code value={rawJsxString} codeMirrorOptions={{ mode: "javascript" }} />
      </div>
    </div>
    <style type="text/css">
      {`
/* TODO stephen none of this should be needed */
.CodeMirror-vscrollbar,
.CodeMirror-hscrollbar,
.CodeMirror-measure,
.CodeMirror-line-like,
.CodeMirror-cursors {
  display: none !important;
}
`}
    </style>
  </>
);

const renderApp = (target) => {
  ReactDOM.render(<App />, target);
};

if (window.singletonSandboxObserver) {
  window.singletonSandboxObserver.disconnect();
}

window.singletonSandboxObserver = new MutationObserver((_, me) => {
  const target = document.getElementById("sandbox_app");
  if (target) {
    renderApp(target);
    me.disconnect();
  }
});

window.singletonSandboxObserver.observe(document, {
  childList: true,
  subtree: true,
});
