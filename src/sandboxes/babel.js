import "regenerator-runtime/runtime";
import {
  transformSync as rawTransformSync,
  createConfigItem,
} from "@babel/core";
import prettier from "prettier/standalone";
import babelParser from "prettier/parser-babel";

const presetMap = {
  "@babel/preset-react": require("@babel/preset-react"),
};

export const transformSync = (inputCode, { presets, plugins }) => {
  /**
   * Babel has slightly different requirements in the browser,
   * and requires the use of `createConfigItem` when passing in an
   * object rather than a string/array...
   * This is all complexity that distracts from the talk, so hiding
   * it away here.
   */
  const transformed = rawTransformSync(inputCode, {
    presets: presets.map((presetStr) => createConfigItem(presetMap[presetStr])),
    plugins: plugins.map((plugin) => createConfigItem(plugin)),
  });

  return {
    ...transformed,
    code: prettier
      .format(transformed.code.replaceAll(/\/\*\#__PURE__\*\/\n*/g, ""), {
        parser: "babel",
        plugins: [babelParser],
      })
      .trim(),
  };
};
