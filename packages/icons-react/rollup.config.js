'use strict';

import external from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import sass from 'rollup-plugin-sass';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import pkg from './package.json';

module.exports = [
  {
    input: './src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve({
        browser: true,
      }),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
      }),
      commonjs({
        include: ['../../node_modules/**'],
        namedExports: {
          'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
          'node_modules/react-dom/index.js': ['render'],
        },
      }),
      sass({
        insert: true,
      }),
      strip(),
      url(),
      svgr(),
    ],
  },
];
