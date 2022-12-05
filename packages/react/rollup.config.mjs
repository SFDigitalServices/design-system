import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import pkgJson from './package.json' assert { type: 'json' }

const production = process.env.NODE_ENV === 'production'
const sourcemap = !production

const commonPlugins = [
  peerDepsExternal(),
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

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.tsx',
    plugins: commonPlugins,
    output: [
      {
        file: pkgJson.module,
        format: 'esm',
        sourcemap
      },
      {
        file: pkgJson.main,
        format: 'commonjs',
        sourcemap
      }
    ]
  }
]
