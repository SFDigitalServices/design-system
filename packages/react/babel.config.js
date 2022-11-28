module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    ['@babel/preset-env', {
      corejs: {
        version: '3.26'
      },
      useBuiltIns: 'usage'
    }]
  ],
  plugins: [
    '@emotion/babel-plugin'
  ]
}
