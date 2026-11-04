import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

const shared: Options = {
  format: ['esm', 'cjs'],
  // Clean once in the build script to avoid parallel declaration build races.
  clean: false,
  dts: true,
  sourcemap: true,
  splitting: false,
  cjsInterop: true,
  external: ['tailwindcss'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : '.js'
  })
}

export default defineConfig([
  {
    ...shared,
    entry: {
      index: 'src/index.ts',
      'react/index': 'src/react/index.ts',
      'formio/index': 'src/formio/index.tsx',
      'formio/factories/index': 'src/formio/factories.ts',
      'tokens/index': 'src/tokens/index.ts'
    },
    outDir: 'dist'
  },
  {
    ...shared,
    entry: { index: 'src/tailwind-preset.ts' },
    outDir: 'dist/tailwind-preset',
    // The preset and its plugins use CommonJS to load Tailwind.
    banner: ({ format }) =>
      format === 'esm'
        ? {
            js: [
              "import { createRequire } from 'node:module';",
              'const require = createRequire(import.meta.url);'
            ].join('\n')
          }
        : undefined,
    // Keep require() consistent with the export-equals declaration.
    footer: ({ format }) =>
      format === 'cjs'
        ? { js: 'module.exports = module.exports.default || module.exports;' }
        : undefined
  }
])
