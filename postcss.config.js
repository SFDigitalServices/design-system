const { NODE_ENV } = process.env
const prod = NODE_ENV === 'production'

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('postcss-strip-inline-comments'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
    prod && require('cssnano'),
    require('postcss-normalize-charset')
  ].filter(Boolean),
  map: {
    inline: false
  }
}
