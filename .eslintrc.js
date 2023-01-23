/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@babel/eslint-parser',
  ignorePatterns: [
    'dist/**',
    '!**/.*.js'
  ],
  plugins: [
    'sfgov',
    'react',
    'unicorn',
    '@typescript-eslint/eslint-plugin'
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:sfgov/recommended',
    'plugin:storybook/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx']
      }
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    'jsx-quotes': ['warn', 'prefer-single'],
    'unicorn/expiring-todo-comments': ['error', {
      allowWarningComments: true
    }],
    'no-trailing-spaces': ['warn', {
      ignoreComments: true
    }],
    'padding-line-between-statements': ['warn', {
      blankLine: 'always',
      prev: '*',
      next: 'function'
    }],
    'react/no-unescaped-entities': ['warn'],
    'react/prop-types': ['warn', {
      skipUndeclared: true
    }]
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['**/*.browser.{js,jsx,mjs,ts,tsx'],
      env: {
        browser: true
      }
    },
    {
      files: ['**/*.ts{,x}'],
      parser: '@typescript-eslint/parser',
      globals: {
        JSX: true
      },
      // these are not needed in TypeScript
      rules: {
        'no-redeclare': ['off'],
        'no-undef': ['off'],
        'no-unused-vars': ['off'],
        'import/named': ['off']
      }
    },
    {
      files: 'lib/**/*.js',
      extends: ['plugin:sfgov/node'],
      env: {
        node: true
      }
    },
    {
      files: '**/*.mjs',
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: '**/scripts/*.{,m}js',
      rules: {
        'node/shebang': ['off']
      }
    }
  ]
}
