'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var typescript = require('@rollup/plugin-typescript');
var json = require('@rollup/plugin-json');
var url = require('@rollup/plugin-url');

const packageJson = require("./package.json");

var rollup_config = {
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
        typescript({tsconfig: './tsconfig.json'}),,
    json({
      compact: true
    }),
  ]
};

exports.default = rollup_config;
