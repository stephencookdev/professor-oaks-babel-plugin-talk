import { transformSync } from "../babel";
import { pokeLookup } from "../utils";

/**
 * The code we want to transform
 */

const inputCode = `
<>
  <div>Pokédex:</div>
  <div>;;25 is an ;;t:electric ;;p who...</div>
  <div>;;384 is a dragon god ;;p who...</div>
</>
`;

/**
 * Our custom Babel plugin
 */

const pokeRegex = /;;([pP])/;
const pokeNumberRegex = /;;([0-9]+)/;
const pokeTypeRegex = /;;t:([a-z]+)/;

const PokePlugin = function ({ types }) {
  const PokeVisitor = {
    StringLiteral(path) {
      if (pokeRegex.test(path.node.value)) {
        const newString = path.node.value.replace(pokeRegex, "$1okémon");
        path.replaceWith(types.stringLiteral(newString));
      } else if (pokeNumberRegex.test(path.node.value)) {
        const newString = path.node.value.replace(pokeNumberRegex, (_, n) =>
          pokeLookup(n)
        );
        path.replaceWith(types.stringLiteral(newString));
      } else if (pokeTypeRegex.test(path.node.value)) {
        const [strStart, matched, strEnd] = path.node.value.split(
          pokeTypeRegex
        );

        path.replaceWith(
          types.expressionStatement(
            types.callExpression(
              types.memberExpression(
                types.identifier("React"),
                types.identifier("createElement")
              ),
              [
                types.memberExpression(
                  types.identifier("React"),
                  types.identifier("Fragment")
                ),
                types.nullLiteral(),
                types.stringLiteral(strStart),
                types.callExpression(
                  types.memberExpression(
                    types.identifier("React"),
                    types.identifier("createElement")
                  ),
                  [
                    types.stringLiteral("a"),
                    types.objectExpression([
                      types.objectProperty(
                        types.stringLiteral("href"),
                        types.stringLiteral("#")
                      ),
                    ]),
                    types.stringLiteral(matched),
                  ]
                ),
                types.stringLiteral(strEnd),
              ]
            )
          )
        );
      }
    },
  };
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
