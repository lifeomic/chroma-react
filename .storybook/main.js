module.exports = {
  stories: [
    '../stories/**/*.stories.@(mdx|ts|tsx)',
    '../src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      resolve: { fullySpecified: false },
    });
    return config;
  },
  docs: {
    autodocs: true,
  },
};
