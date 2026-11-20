import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'

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
  framework: '@storybook/react-vite',
  // Mirrors the `@/src` paths in .storybook/tsconfig.json.
  viteFinal: (config) =>
    mergeConfig(config, {
      resolve: {
        alias: {
          '@/src': fileURLToPath(new URL('../src', import.meta.url)),
          '@/lib': fileURLToPath(new URL('../lib', import.meta.url))
        }
      }
    })
}

export default config
