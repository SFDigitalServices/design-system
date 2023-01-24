/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react'
  ],
  extends: [
    'plugin:sfgov/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: [
    'dist/**',
    '**/*.json'
  ],
  globals: {
    JSX: true
  },
  rules: {
    'react/no-unescaped-entities': ['warn'],
    'react/prop-types': ['off']
  }
}
