const { getPreloadLinks } = require('../dist/react')

const { NODE_ENV } = process.env
const storiesGlob = '**/*.stories.@(js|jsx|ts|tsx)'

/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  framework: '@storybook/react',
  stories: [
    '../storybook/docs/**/*.stories.md{,x}',
    {
      directory: '../stories/components',
      titlePrefix: 'Components/',
      files: storiesGlob
    },
    {
      directory: '../stories/experiments',
      titlePrefix: 'Experiments/',
      files: storiesGlob
    },
    {
      directory: '../stories/Agency Page',
      titlePrefix: 'Agency Page/',
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
  },

  /**
   * This mimics the <SSRStyle> component's output, which is official Google Fonts(tm)
   * way of making sure that the fonts load as early in the page load as possible to
   * prevent a FOUC.
   * 
   * @param {string} head 
   * @returns 
   */
  previewHead (head) {
    const links = getPreloadLinks()
    return `
      ${head}
      ${links.map(attrs => tag('link', attrs)).join('\n')}
    `
  }
}

/**
 * 
 * @param {string} name 
 * @param {Record<string, string>} attrs 
 * @returns 
 */
function tag (name, attrs) {
  const attrString = attrs
    ? Object.entries(attrs)
      .map(([name, value]) => ` ${name}="${escapeAttrValue(value)}"`)
      .join('')
    : ''
  return `<${name}${attrString}>`
}

function escapeAttrValue (str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
}
