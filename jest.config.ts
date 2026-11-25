import type { Config } from 'jest'

const CI = !!process.env.CI

export default {
  ci: CI,
  coverageThreshold: {
    global: {
      lines: 100,
      functions: 100,
      statements: 100,
      branches: 100
    }
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    // Ignore storybook stories for now
    '!<rootDir>/.storybook/**/*',
    '!**/*.stories.*',
    // not covering the tailwind preset for now
    '!**/tailwind-preset.ts',
    '!**/tailwind-plugin.ts',
    // not covered
    '!**/theme/**/*.ts',
    '!**/tokens/**/*.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/browser/', '/dist/'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
    '.*\\.mjs$': 'babel-jest'
  }
} satisfies Config
