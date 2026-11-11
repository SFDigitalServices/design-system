import type { Config } from 'jest'

const CI = !!process.env.CI

export default {
  ci: CI,
  coverageThreshold: {
    global: {
      lines: 100,
      functions: 95, // FIXME: back to 100 when we delete formio
      statements: 100,
      branches: 100
    }
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts*',
    // type declarations don't need coverage
    '!**/*.d.ts',
    // not covering the tailwind preset for now
    '!**/tailwind-preset.ts',
    '!**/tailwind-plugin.ts',
    // FIXME: remove this when we bring back our formio templates
    '!**/formio/templates/**/*.tsx',
    '!**/formio/components/*.ts',
    // not covered
    '!**/theme/**/*.ts',
    '!**/tokens/**/*.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/browser/', '/dist/'],
  transform: {
    '.*/formio/templates/.*\\.tsx$': [
      'babel-jest',
      {
        extends: './babel.config.js'
      }
    ],
    '^.+\\.(t|j)sx?$': 'ts-jest',
    '.*\\.mjs$': 'babel-jest'
  }
} satisfies Config
