const preprocess = require('svelte-preprocess');

module.exports = {
  core: {
    builder: "storybook-builder-vite"
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  // The rest of the config here...
  svelteOptions: {
    // Same options that you pass to preprocess in svelte.config.js
    preprocess: preprocess(),
  },
};