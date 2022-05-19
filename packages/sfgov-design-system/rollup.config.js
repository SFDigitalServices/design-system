import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

// eslint-disable-next-line no-undef
const { NODE_ENV = "development" } = process.env;
const prod = NODE_ENV === "production";

const commonPlugins = [
  resolve(),
  json(),
  babel({
    babelHelpers: "bundled",
  }),
  prod ? terser() : null,
].filter(Boolean);

export default [
  target({ input: "src/js/sfds.js", name: "sfgov" }),
  target({ input: "src/js/icons.js", name: "sfgovIcons" }),
  target({ input: "src/js/docs.js", name: "sfgovDocs" }),
];

function target({ input, name, ...rest }) {
  const outputBase = input.replace("src/", "dist/");
  return {
    input,
    plugins: [...commonPlugins],
    output: [
      output({
        file: outputBase,
        format: "umd",
        name,
      }),
      output({
        file: outputBase.replace(".js", ".mjs"),
        format: "esm",
      }),
    ],
  };
}

function output(props) {
  return {
    entryFileNames: "dist/js/[name].[format].js",
    sourcemap: prod,
    ...props,
  };
}
