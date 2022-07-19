/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  plugins: [
    'react',
    '@docusaurus/eslint-plugin'
  ],
  extends: [
    'plugin:sfgov/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'import/no-unresolved': 0,
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-unused-vars': ['warn', {
      varsIgnorePattern: '^@(site|theme)/'
    }],
    'react/prop-types': ['warn', {
      skipUndeclared: true
    }],
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: true
      }
    ]
  }
  /*
    This plugin (https://github.com/mdx-js/eslint-mdx) causes linting to hang indefinitely on .mdx files.
    In the future, if we find markdownlint isn't meeting our linting
    needs, we can return to attempting to debug this, or perhaps look
    into remark-lint (https://github.com/remarkjs/remark-lint)
  */
  // overrides: [
  //   {
  //     files: ['*.md', '*.mdx'],
  //     extends: 'plugin:mdx/recommended'
  //   }
  // ]
}
