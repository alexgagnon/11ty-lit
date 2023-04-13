import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import path, { join } from 'path';

// This allows us to minify Lit's css and html tagged template literals, but it currently doesn't support Rollup 3
// import minifyHTML from 'rollup-plugin-minify-html-literals';

import {rollupPluginHTML as html} from '@web/rollup-plugin-html';

const plugins = [
  alias({
    entries: [
      { find: '@', replacement: process.cwd() },
    ]
  }),
  resolve(),
  terser({
    ecma: 2020,
    module: true,
    warnings: true
  }),
];

const output = {
  dir: 'dist',
  format: 'es',
};

export default [
  {
    input: '**/*.html',
    plugins: [
      html({ rootDir: path.join(process.cwd(), '_site'), flattenOutput: false }), 
      ...plugins
    ],
    output,
  }
];