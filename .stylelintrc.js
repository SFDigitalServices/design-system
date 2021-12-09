module.exports = {
  extends: [
    'stylelint-config-standard'
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
    'string-quotes': 'single'
  }
}
