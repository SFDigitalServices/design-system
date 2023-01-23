/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: '../.eslintrc.js',
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
