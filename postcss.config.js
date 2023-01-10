const { NODE_ENV } = process.env
const production = NODE_ENV === 'production'

/** @type {import('postcss').ProcessOptions} */
module.exports = {
  /** @type {import('postcss').AcceptedPlugin[]} */
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
    production && require('cssnano')
  ].filter(Boolean),
  map: {
    inline: false
  }
}
