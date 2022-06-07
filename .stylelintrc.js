module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss'
  ],
  plugins: ['stylelint-expiring-todo-comments'],
  rules: {
    'function-no-unknown': [true, {
      ignoreFunctions: ['theme']
    }],
    'sfgov/expiring-todo-comments': [true, {}],
    'string-quotes': 'single'
  }
}
