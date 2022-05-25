/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  plugins: [
    'react',
    '@docusaurus/eslint-plugin'
  ],
  extends: [
    'plugin:sfgov/recommended'
  ],
  rules: {
    'import/no-unresolved': 0,
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-unused-vars': ['warn', {
      varsIgnorePattern: '^@(site|theme)/'
    }],
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: true
      }
    ]
  }
}
