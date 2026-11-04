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
        createTypeScriptImportResolver({ project: './tsconfig.json' })
      ]
    }
  },
  {
    files: ['**/*.{ts,cts,mts,tsx}'],
    extends: [tseslint.configs.recommended, importX.flatConfigs.typescript]
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
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}', 'jest.setup.ts'],
    languageOptions: { globals: globals.jest }
  },
  {
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
    extends: [testingLibrary.configs['flat/react']]
  },
  // Formatting remains Prettier's responsibility.
  prettier
)