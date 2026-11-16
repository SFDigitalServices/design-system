import type { KnipConfig } from 'knip'

export default {
  storybook: {
    config: '.storybook/main.ts',
    entry: ['.storybook/**/*', 'src/**/*.stories.*', 'src/**/*.mdx']
  },
  ignore: ['src/formio/**/*']
} satisfies KnipConfig
