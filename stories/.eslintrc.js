/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  rules: {
    'react/no-unescaped-entities': ['warn'],
    'react/prop-types': ['warn'],
    'import/no-unresolved': ['warn', {
      commonjs: true,
      ignore: [
        '^@sfgov/design-system/'
      ]
    }]
  }
}
