import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  core: {
    disableTelemetry: true
  },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.*'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-designs',
    '@storybook/addon-mcp',
    'storybook-addon-tag-badges'
  ],
  framework: '@storybook/react-vite'
}

export default config
