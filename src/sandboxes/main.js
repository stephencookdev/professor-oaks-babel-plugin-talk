import { transformSync } from "./babel";
import { pokeLookup } from "./utils";

/**
 * The code we want to transform
 */

const inputCode = `
<div>Hello world</div>
`;

/**
 * Our custom Babel plugin
 */

const pokeRegex = /;;([pP])/;
const pokeNumberRegex = /;;([0-9]+)/;
const pokeTypeRegex = /;;t:([a-z]+)/;

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

export default result.code;
