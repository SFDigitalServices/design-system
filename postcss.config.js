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
    require('postcss-custom-properties'),
    prod && require('cssnano'),
    require('postcss-normalize-charset'),
    require('postcss-copy')({
      basePath: ['src', 'node_modules'],
      preservePath: true,
      dest: 'dist/css/files',
      template: '[name].[ext]'
    })
  ].filter(Boolean),
  map: {
    inline: false
  }
}
