module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-expiring-todo-comments'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'layer',
          'responsive',
          'screen',
          'tailwind',
          'variants'
        ]
      }
    ],
    'sfgov/expiring-todo-comments': [true, {}],
    'string-quotes': 'single'
  }
}
