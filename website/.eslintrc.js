/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['@docusaurus/eslint-plugin'],
  extends: ['../.eslintrc.js', 'plugin:@docusaurus/recommended'],
  rules: {
    'import/no-unresolved': ['warn', {
      ignore: [
        '^@docusaurus/',
        '^@sfgov/design-system/',
        '^@site/',
        '^@theme/',
        '^@theme-original/',
        '^!!raw-loader!'
      ]
    }]
  },
  overrides: [
    /*
      This plugin (https://github.com/mdx-js/eslint-mdx) causes linting to hang indefinitely on .mdx files.
      In the future, if we find markdownlint isn't meeting our linting
      needs, we can return to attempting to debug this, or perhaps look
      into remark-lint (https://github.com/remarkjs/remark-lint)
    */
    //   {
    //     files: ['*.md', '*.mdx'],
    //     extends: 'plugin:mdx/recommended'
    //   }
  ]
}
