import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
// import minifyHTML from 'rollup-plugin-minify-html-literals';

const plugins = [
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
    input: '../../node_modules/design-system/dist/index.js',
    plugins: [/*minifyHTML(),*/ ...plugins],
    output: {
      ...output,
      entryFileNames: 'design-system.js',
    },
    preserveEntrySignatures: 'strict',
  },

  {
    input: '../../node_modules/@lit-labs/ssr-client/lit-element-hydrate-support.js',
    plugins,
    output
  },

  {
    input: '../../node_modules/@webcomponents/template-shadowroot/template-shadowroot.js',
    plugins,
    output
  },
];