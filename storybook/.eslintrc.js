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
    'react/no-unescaped-entities': ['warn'],
    'import/no-unresolved': ['error', {
      ignore: [
        // XXX: we have to ignore these so that we can lint the project before
        // building, which is what creates all of the importable paths
        '^sfgov-design-system'
      ]
    }]
  }
}
