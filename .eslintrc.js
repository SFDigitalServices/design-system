/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  plugins: ['@typescript-eslint', 'sfgov', 'react', 'testing-library'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:sfgov/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: [
    '/dist/',
    // TODO: remove this when stories have been colocated
    '/stories/'
  ],
  rules: {
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true
      }
    ],
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreStrings: true,
        ignoreUrls: true
      }
    ],
    'react/jsx-no-leaked-render': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: "fake"
    }],
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-import-type-side-effects': 'error',
  },
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      rules: {
        // see: https://typescript-eslint.io/rules/prefer-function-type/#examples
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/consistent-type-imports': 'warn',
        // these rules are great in JS environments, but TS has its own rules
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
      }
    },
    {
      files: '**/*.js',
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ]
}
