/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  ignorePatterns: [
    'public/**'
  ],
  extends: [
    'plugin:sfgov/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'react/no-unescaped-entities': ['warn']
  }
}
