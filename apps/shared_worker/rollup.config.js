import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";


export default {
  input: "src/index.ts",
  output: {
      sourcemap: true,
      dir: "./dist",
      format: "esm"
  },
  plugins: [
    url(),
    resolve(),
        typescript({tsconfig: './tsconfig.json'}),,
    json({
      compact: true
    }),
  ]
};