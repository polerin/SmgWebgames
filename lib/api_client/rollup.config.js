import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: {
      sourcemap: true,
      dir: "../../dist/lib/api_client",
      format: "esm"
  },
  plugins: [
    url(),
    resolve(),
    // babel({
    //   babelHelpers: 'runtime',
    //   presets: ['@babel/preset-react'],
    //   extensions: ['.js', '.jsx'],
    //   exclude: '**/node_modules/**'
    // }),
    typescript(),
    json({
      compact: true
    }),
  ]
};