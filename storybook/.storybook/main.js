const { NODE_ENV } = process.env

/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  stories: [
    '../@(docs|stories)/**/*.stories.@(js|jsx|mdx|ts|tsx)'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],

  env: config => ({
    ...config,
    NODE_ENV
  }),

  /**
   * This is apparently how we set the base URL of the published storybook export,
   * at least according to this well-loved comment:
   *
   * <https://github.com/storybookjs/storybook/issues/7775#issuecomment-968992047>
   *
   * @param {string} head
   * @param {{ configType: string }} context
   * @returns {string}
   */
  managerHead (head, { configType }) {
    return configType === 'PRODUCTION'
      ? `${head}<base href="/storybook/">`
      : head
  }
}
