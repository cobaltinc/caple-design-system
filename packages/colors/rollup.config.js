'use strict';

import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import sass from 'rollup-plugin-sass';
import pkg from './package.json';

module.exports = [
  {
    input: './src/index.ts',
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
      resolve({
        browser: true,
      }),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
      }),
      commonjs({
        include: ['../../node_modules/**'],
      }),
      sass(),
      strip(),
    ],
  },
];
