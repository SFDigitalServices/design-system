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
    'plugin:sfgov/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'import/no-unresolved': 0,
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-unused-vars': ['warn', {
      varsIgnorePattern: '^@(site|theme)/'
    }],
    'react/prop-types': ['warn', {
      skipUndeclared: true
    }],
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
