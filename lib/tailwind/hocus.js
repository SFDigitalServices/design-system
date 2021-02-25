const plugin = require('tailwindcss/plugin')

const suffixes = ['.hocus', ':hover', '.hover', ':focus', '.focus']

module.exports = plugin(({ addVariant, e }) => {
  addVariant('hocus', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const prefix = '.' + e(`hocus${separator}${className}`)
      return suffixes
        .map(suffix => `${prefix}${suffix}`)
        .join(',\n')
    })
  })
})

