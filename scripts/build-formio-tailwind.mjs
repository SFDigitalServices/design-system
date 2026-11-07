#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import postcss from 'postcss'
import atImport from 'postcss-import'
import tailwindcss from 'tailwindcss'

const input = 'src/formio/formio.css'
const output = 'dist/formio/formio.css'

const css = await readFile(input, 'utf8')
const result = await postcss([
  atImport(),
  tailwindcss({ config: './tailwind.formio.config.mjs' })
]).process(css, { from: input, to: output })

await mkdir(dirname(output), { recursive: true })
await writeFile(output, result.css, 'utf8')
console.log('built %s', output)
