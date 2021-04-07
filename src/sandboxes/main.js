import { transformSync } from "./babel";

/**
 * The code we want to transform
 */

const inputCode = `
<div>Hello world</div>
`;

/**
 * Our custom Babel plugin
 */

const PokePlugin = function ({ types }) {
  const PokeVisitor = {};
  return { visitor: PokeVisitor };
};

/**
 * Running Babel manually to test our plugin
 */

const result = transformSync(inputCode, {
  presets: ["@babel/preset-react"],
  plugins: [PokePlugin],
});

console.log(`Output code:
--------
${result.code}
--------`);

export default result.code;
