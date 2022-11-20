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
    babelHelpers: 'bundled'
  }),
  terser()
]

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.tsx',
    plugins: [
      ...commonPlugins,
      peerDepsExternal()
    ],
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
    external: [
      'react',
      'react-dom'
    ],
    output: [
      {
        file: 'dist/bundled.mjs',
        format: 'esm',
        sourcemap
      },
      {
        file: 'dist/bundled.js',
        format: 'commonjs',
        sourcemap
      }
    ]
  }
]
