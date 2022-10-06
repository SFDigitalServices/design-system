/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  ignorePatterns: [
    'public/**',
    '!.storybook/**'
  ],
  extends: [
    'plugin:sfgov/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'react/no-unescaped-entities': ['warn'],
    'react/prop-types': ['off'],
    'import/no-unresolved': ['warn']
  }
}
