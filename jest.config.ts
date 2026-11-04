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
    '<rootDir>/src/**/*.ts*',
    // type declarations don't need coverage
    '!**/*.d.ts',
    // FIXME: remove this when we bring back our formio templates
    '!**/formio/templates/**',
    '!**/formio/components/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/browser/', '/dist/'],
  transform: {
    '.*/formio/templates/.*\\.tsx$': ['babel-jest', {
      extends: './babel.config.js'
    }],
    '^.+\\.(t|j)sx?$': 'ts-jest',
    '.*\\.mjs$': 'babel-jest'
  }
} satisfies Config
