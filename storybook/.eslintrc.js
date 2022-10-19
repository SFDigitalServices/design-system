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
    'import/no-unresolved': ['error', {
      ignore: [
        // XXX: we have to ignore these so that we can lint the project before
        // building, which is what creates all of the importable paths
        '^sfgov-design-system'
      ]
    }],
    'react/no-unescaped-entities': ['warn'],
    'react/prop-types': ['off']
  }
}
