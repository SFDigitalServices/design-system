import type { KnipConfig } from 'knip'

export default {
  entry: ['*.config.*', '.github/workflows/*.yml', 'scripts/*'],
  ignore: ['dist/**/*'],
  ignoreDependencies: [
    // Jest loads jest.config.ts via ts-node implicitly
    'ts-node'
  ],
  storybook: {
    config: '.storybook/main.ts',
    entry: ['.storybook/**/*', 'src/**/*.stories.*', 'src/**/*.mdx']
  }
} satisfies KnipConfig
