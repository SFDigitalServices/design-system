// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import react from '@eslint-react/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier/flat'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { importX } from 'eslint-plugin-import-x'
import testingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig(
  globalIgnores([
    '**/dist/**',
    '**/coverage/**',
    // Archived stories are not runnable yet; see stories/README.md.
    'stories/**'
  ]),
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
    extends: [js.configs.recommended, importX.flatConfigs.recommended],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: ['./tsconfig.json', './.storybook/tsconfig.json'],
          noWarnOnMultipleProjects: true
        })
      ]
    }
  },
  {
    files: ['**/*.{ts,cts,mts,tsx}'],
    extends: [tseslint.configs.recommended, importX.flatConfigs.typescript],
    rules: {
      // Flags imports only used as types and autofixes them to `import type`.
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
      ],
      // Prefers `import type { A }` over `import { type A }`.
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level']
    }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    ignores: ['src/formio/templates/**'],
    // The TypeScript parser also understands implicit JSX factory usage in JS.
    extends: [tseslint.configs.recommended, react.configs.recommended]
  },
  {
    files: ['src/formio/templates/**/*.tsx'],
    rules: {
      // The @jsx h pragma implicitly uses vhtml's factory.
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^h$' }]
    }
  },
  {
    files: ['tailwind.formio.config.mjs'],
    // Imports built output; dist is gitignored and CI lints before building.
    rules: { 'import-x/no-unresolved': 'off' }
  },
  {
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}', 'jest.setup.ts'],
    languageOptions: { globals: globals.jest }
  },
  {
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
    extends: [testingLibrary.configs['flat/react']]
  },
  {
    files: [
      '.storybook/**/*.{js,mjs,mts,ts,tsx}',
      '**/*.stories.{js,mjs,mts,ts,tsx}',
    ],
    extends: [storybook.configs["flat/recommended"]]
  },
  // Formatting remains Prettier's responsibility.
  prettier
)