const theme = require('./src/theme')
const interactionVariants = require('tailwindcss-interaction-variants')

module.exports = {
  theme,
  important: true,
  plugins: [
    interactionVariants
  ]
}
