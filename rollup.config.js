import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

// eslint-disable-next-line no-undef
const { NODE_ENV = 'development' } = process.env
const prod = NODE_ENV === 'production'

const commonPlugins = [
  resolve(),
  commonjs({
    transformMixedEsModules: true
  }),
  json(),
  babel({
    babelHelpers: 'bundled'
  }),
  prod ? terser() : null
].filter(Boolean)

export default [
  target({ input: 'src/js/sfds.js', name: 'sfgov' }),
  target({ input: 'src/js/icons.js', name: 'sfgov.icons' }),
  target({ input: 'src/js/docs.js', name: 'sfgov.docs', module: false })
]

function target ({ input, name, plugins = commonPlugins, ...rest }) {
  const outputBase = input.replace('src/', 'dist/')
  return {
    input,
    plugins,
    output: [
      name && output({
        file: outputBase,
        format: 'umd',
        name
      }),
      rest.module !== false && output({
        file: outputBase.replace('.js', '.mjs'),
        format: 'esm'
      })
    ].filter(Boolean)
  }
}

function output (props) {
  return {
    entryFileNames: 'dist/js/[name].[format].js',
    sourcemap: prod,
    ...props
  }
}
