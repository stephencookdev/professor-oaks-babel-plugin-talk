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

      <Code value={rawJsxString} codeMirrorOptions={{ mode: "javascript" }} />
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

if (window.singletonSandboxObserverComplete) {
  window.singletonSandboxObserverComplete.disconnect();
}

window.singletonSandboxObserverComplete = new MutationObserver((_, me) => {
  const target = document.getElementById("sandbox_app_complete");
  if (target) {
    renderApp(target);
    me.disconnect();
  }
});

window.singletonSandboxObserverComplete.observe(document, {
  childList: true,
  subtree: true,
});
