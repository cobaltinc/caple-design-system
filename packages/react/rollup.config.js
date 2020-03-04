'use strict';

import jsx from 'acorn-jsx';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import sass from 'rollup-plugin-sass';
import svgr from '@svgr/rollup';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = [
  {
    input: './src/index.ts',
    output: {
      format: 'es',
      file: pkg.module,
    },
    external: [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)],
    acornInjectPlugins: [jsx()],
    plugins: [
      resolve({ extensions }),
      commonjs({
        include: /node_modules/,
      }),
      typescript({ jsx: 'preserve' }),
      strip(),
      sass(),
      svgr(),
    ],
  },
];
