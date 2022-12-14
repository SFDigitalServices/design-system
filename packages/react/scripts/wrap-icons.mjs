import { readFileSync, writeFileSync } from 'node:fs'

const filename = '../icons/react/index.js'
const input = readFileSync(filename, 'utf8')

const imports = []

input.replace(/export { default as (\w+) } from '\.\/(.+)'/g, (_, name, path) => {
  const source = readFileSync(`../icons/react/${path}`, 'utf8')
  const viewBox = source.match(/viewBox=['"]([ \d]+)["']/)?.[1]?.split(' ').map(Number)
  imports.push({ name, path, viewBox })
})

imports.sort((a, b) => a.name.localeCompare(b.name))

const tsx = `
import * as icons from '@sfgov/icons/react'
import { createStyledIcon as wrap } from './components'

${imports.map(({ name, viewBox }) => `export const ${name} = wrap(icons.${name}, [${viewBox.join(', ')}])`).join('\n')}
`

writeFileSync('src/icons.tsx', tsx, 'utf8')
