import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

const production = process.env.NODE_ENV === 'production'
const sourcemap = !production

const commonPlugins = [
  resolve(),
  json({
    compact: true
  }),
  typescript(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    // see: <https://github.com/rollup/rollup-plugin-babel/issues/254>
    exclude: ['**/core-js/**']
  }),
  terser()
]

const externalDepsPlugins = [...commonPlugins, peerDepsExternal()]

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.tsx',
    plugins: externalDepsPlugins,
    output: [
      {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap
      },
      {
        file: 'dist/index.js',
        format: 'commonjs',
        sourcemap
      }
    ]
  },
  {
    input: 'src/index.tsx',
    plugins: commonPlugins,
    output: [
      {
        file: 'dist/bundled.mjs',
        format: 'esm',
        sourcemap
      }
    ]
  }
]
