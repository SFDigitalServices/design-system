module.exports = {
  plugins: ['sfgov'],
  extends: [
    'plugin:sfgov/recommended'
  ],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
