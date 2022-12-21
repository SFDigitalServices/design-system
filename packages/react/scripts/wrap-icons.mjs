import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { components } = require('../../icons/index.json')

const imports = components.map(c => {
  return {
    name: c.component,
    path: c.file,
    size: c.size
  }
})

imports.sort((a, b) => a.name.localeCompare(b.name))

const tsx = `
import * as icons from '@sfgov/icons/react'
import { createStyledIcon as wrap } from './components'

${imports.map(({ name, size }) => `export const ${name} = wrap(icons.${name}, ${JSON.stringify(size)})`).join('\n')}
`

writeFileSync('src/icons.tsx', tsx, 'utf8')
execSync('npx eslint --fix src/icons.tsx')
