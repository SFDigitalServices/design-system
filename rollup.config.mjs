import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'

/**
 * @typedef {import('rollup').RollupOptions} RollupOptions
 * @typedef {import('rollup').InputOptions} InputOptions
 * @typedef {import('rollup').OutputOptions} OutputOptions
 */

const { NODE_ENV } = process.env
const production = NODE_ENV === 'production'
const sourcemap = !production

const commonPlugins = [
  commonjs({
  }),
  json({
    compact: true
  }),
  resolve({
  }),
  peerDepsExternal(),
  ts({
    transpiler: 'babel'
  }),
  production && terser()
]

/** @type {RollupOptions[]} */
export default [
  {
    input: 'elements/src/index.js',
    plugins: commonPlugins,
    output: [
      {
        file: 'elements/dist/index.mjs',
        format: 'esm',
        sourcemap
      },
      {
        file: 'elements/dist/index.js',
        format: 'umd',
        name: 'sfgov.elements',
        sourcemap
      }
    ]
  },
  {
    input: './react/src/index.ts',
    plugins: commonPlugins,
    output: [
      {
        file: 'react/dist/index.mjs',
        format: 'esm',
        sourcemap
      },
      {
        file: 'react/dist/index.js',
        format: 'umd',
        name: 'sfgov.react',
        sourcemap,
        globals: {
          react: 'React'
        }
      }
    ]
  }
]
