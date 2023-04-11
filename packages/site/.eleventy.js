const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'dist/**/*.*': 'js/',
  });
  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: [
      '../../node_modules/design-system/dist/design-system.js',
    ],
  });

  return {
    dir: {
      input: 'src',
    }
  }
};