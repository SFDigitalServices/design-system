/** @type {import('@babel/core').} */
module.exports = {
  exclude: [
    '**/node_modules/**'
  ],
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: {
        version: '3'
      }
    }]
  ]
}
