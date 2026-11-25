/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  arrowParens: 'always',
  bracketSpacing: true,
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss'
  ],
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  tailwindFunctions: [
    'classed',
    'classes',
    'classify',
    'coreClassed',
    'toHaveClass'
  ]
}
