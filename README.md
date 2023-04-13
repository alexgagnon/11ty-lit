# 11ty + Lit

A demo repo of how to set up a design system with Lit and use it in an 11ty site.

See the blog post [here](https://dev.to/alexgagnon/11ty-lit-a-match-made-in-heaven-for-simple-sites-1373)

This branch is a more complicated version of the demo repository where we try to do some performance optimizations by code-splitting, using page-specific entrypoints, and cache busting strategies, and introduce some more components.

The main thing we need to do to get cache custing to work is to change the order in which where building. Before, we used rollup to build bundled versions of our JS modules, and then built our site with pages just referencing these assets. However, having versioned filenames (in this case by adding in the hash of file), requires flipping that. What we want to do instead is build our site with the basic versions of the modules, and then modify our Rollup script to use the HTML files as the entry points (this is done with the `@web/rollup-plugin-html` plugin). This way, it can find all our referenced JS modules, do our uglification/minification and code-splitting, AND be able to replace their paths with the new hashed versions of the filenames.

One thing that is always problematic is using relative paths where the directory structure changes. So we've set up `.eleventy.js`, to try to generate the `_site` directory with the __exact same structure__. We've also simplified our life a little by using the `@rollup/plugin-alias` so that we can use a "root" base path of "@" for all our imports. The @ gets replaced with the CWD where rollup was run from.

If you look at the `entrypoints` folder, there's a 1-to-1 mapping of JS modules to HTML pages, and the JS modules are responsible for importing the individual components they will need on the page. Notice that the Banner components is imported by both entrypoints. After we've built the site, notice that Banner.js is extracted to it's own file. This is because we're using a glob pattern for the input to `@web/rollup-plugin-html`, so Rollup will check all our pages for shared code and extract them. Pretty neat!

## Usage

```
git clone git@github.com:alexgagnon/11ty-lit
npm i
npm start
```