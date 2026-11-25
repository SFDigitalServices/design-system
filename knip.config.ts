import type { KnipConfig } from 'knip'

export default {
  entry: ['*.config.*', '.github/workflows/*.yml', 'scripts/*'],
  ignoreDependencies: [
    // Jest loads jest.config.ts via ts-node implicitly
    'ts-node'
  ],
  storybook: {
    config: '.storybook/main.ts',
    entry: ['.storybook/**/*', 'stories/**/*.{ts,tsx,mdx}']
  }
} satisfies KnipConfig
