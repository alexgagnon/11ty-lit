const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = function (eleventyConfig) {
  // copy these files into our publish directory
  eleventyConfig.addPassthroughCopy({
    'dist/**/*.*': 'js/',
  });

  // add the Lit custom-element detector/processor
  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: [
      '../../node_modules/design-system/dist/index.js',
    ],
  });

  // keep clutter to a minimum by having site source files in src/
  return {
    dir: {
      input: 'src',
    }
  }
};