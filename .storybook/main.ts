import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  core: {
    disableTelemetry: true
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-designs',
    '@storybook/addon-mcp'
  ],
  framework: '@storybook/react-vite',
  // Mirrors the `@/src` paths in .storybook/tsconfig.json.
  viteFinal: (config) =>
    mergeConfig(config, {
      resolve: {
        alias: {
          '@/src': fileURLToPath(new URL('../src', import.meta.url))
        }
      }
    })
}

export default config
