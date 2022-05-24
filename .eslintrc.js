module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['sfgov', 'unicorn'],
  extends: ['plugin:sfgov/recommended'],
  rules: {
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: true
      }
    ]
  },
  overrides: [
    {
      files: '**/rollup.config.js',
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
