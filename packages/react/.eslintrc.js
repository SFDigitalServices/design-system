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
    'dist/**'
  ],
  globals: {
    JSX: true
  },
  rules: {
    'react/no-unescaped-entities': ['warn'],
    'react/prop-types': ['off']
  },
  overrides: [
    {
      files: ['**/*.ts{,x}'],
      // these are not needed in TypeScript
      rules: {
        'no-undef': ['off'],
        'import/named': ['off']
      }
    }
  ]
}
