/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@babel/eslint-parser',
  plugins: [
    'sfgov',
    'unicorn'
  ],
  extends: [
    'plugin:sfgov/recommended'
  ],
  rules: {
    'unicorn/expiring-todo-comments': ['error', {
      allowWarningComments: true
    }],
    'no-trailing-spaces': ['warn', {
      ignoreComments: true
    }],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'function' }
    ]
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['src/**/*.js'],
      env: {
        browser: true
      },
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: 'lib/**/*.js',
      extends: ['plugin:sfgov/node'],
      env: {
        node: true
      }
    },
    {
      files: 'rollup.config.js',
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: '**/scripts/*.js',
      rules: {
        'node/shebang': 0
      }
    }
  ]
}
