/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@babel/eslint-parser',
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
    'import/ignore': [
      '@sfgov/design-system/*'
    ],
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
    'react/prop-types': ['off']
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '**/dist/**'
  ],
  globals: {
    JSX: true
  },
  overrides: [
    {
      files: ['*/src/**/*.js'],
      env: {
        browser: true
      },
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: ['**/*.ts{,x}'],
      parser: '@typescript-eslint/parser',
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
      files: '**/scripts/*.js',
      rules: {
        'node/shebang': 0
      }
    }
  ]
}
