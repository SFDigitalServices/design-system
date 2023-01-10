/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  ignorePatterns: [
    'public/**',
    '**/dist/**',
    '!.storybook/**'
  ],
  rules: {
    'react/no-unescaped-entities': ['warn'],
    'react/prop-types': ['off'],
    'import/no-unresolved': ['warn', {
      commonjs: true
    }]
  }
}
