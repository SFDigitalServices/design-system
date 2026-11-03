/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: [
    // enables modules
    '@babel/preset-env',
    // enables typescript
    '@babel/preset-typescript',
    // enables vhtml via jsx runtime
    ['@babel/preset-react', {
      // disable passing the __source and __self props:
      // https://babeljs.io/docs/babel-preset-react#development
      development: false
    }]
  ],
  plugins: [
    // inline CSS imports as strings
    ['babel-plugin-inline-import', {
      extensions: ['.css']
    }]
  ]
}