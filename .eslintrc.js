module.exports = {
  plugins: ['sfgov'],
  extends: [
    'plugin:sfgov/recommended',
    'plugin:sfgov/node'
  ],
  env: {
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
