import type { KnipConfig } from 'knip'

export default {
  entry: ['*.config.*', '.github/workflows/*.yml', 'scripts/*'],
  ignore: ['dist/**/*', 'src/formio/**/*'],
  // Jest loads jest.config.ts via ts-node implicitly
  ignoreDependencies: ['ts-node'],
  storybook: {
    config: '.storybook/main.ts',
    entry: ['.storybook/**/*', 'src/**/*.stories.*', 'src/**/*.mdx']
  }
} satisfies KnipConfig
