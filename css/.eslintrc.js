module.exports = {
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
      files: 'scripts/*.js',
      rules: {
        'node/shebang': 0
      }
    }
  ]
}
