const { NODE_ENV } = process.env
const storiesGlob = '**/*.stories.@(js|jsx|ts|tsx)'

/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  framework: '@storybook/react',
  stories: [
    '../docs/**/*.stories.md{,x}',
    {
      directory: '../stories/Components',
      titlePrefix: 'Components/',
      files: storiesGlob
    },
    {
      directory: '../stories/Experiments',
      titlePrefix: 'Experiments/',
      files: storiesGlob
    }
  ],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  addons: [
    'storybook-source-link',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    'storybook-addon-designs'
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
