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
      dir: "./dist",
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
    typescript({tsconfig: './tsconfig.json'}),
    json({
      compact: true
    }),
    // postcss({
    //   plugins: [
    //     postcssPrefixSelector({
    //       prefix: '.component-library',
    //     }),
    //     postcssRemToPx({
    //       rootValue: 10,
    //       propList: ['*'],
    //       replace: true,
    //       mediaQuery: true,
    //     }),
    //   ]
    // }),
  ]
};