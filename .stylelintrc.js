module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    './lib/stylelint/expiring-todo-comments'
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'apply',
        'layer',
        'responsive',
        'screen',
        'tailwind',
        'variants'
      ]
    }],
    'local/expiring-todo-comments': [true, {
    }],
    'string-quotes': 'single'
  }
}
