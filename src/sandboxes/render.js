import React from "react";
import ReactDOM from "react-dom";

import rawJsxString from "./main";

const mainGen =
  typeof rawJsxString === "string"
    ? `(function(React) { return ${rawJsxString.replace("\n", " ")} })`
    : "(function(){return null})";
const main = eval(mainGen)(React);

const App = () => <>{main}</>;

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
