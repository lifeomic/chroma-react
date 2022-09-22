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
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      resolve: { fullySpecified: false },
    });
    return config;
  },
};
