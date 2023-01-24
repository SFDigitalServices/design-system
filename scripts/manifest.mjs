#!/usr/bin/env node
import { globby } from 'globby'
import { statSync, writeFileSync } from 'node:fs'
import { ensureDirSync, ensureDir } from 'fs-extra'

const globs = process.argv.slice(2)

ensureDirSync('dist')

// eslint-disable-next-line promise/catch-or-return
globby([...globs, '!**/manifest.json'])
  .then(found => {
    let totalSize = 0
    const entries = found
      .map(path => ({
        path,
        stat: statSync(path)
      }))
      .filter(item => !item.stat.isDirectory())
      .map(({ path, stat: { size } }) => {
        totalSize += size
        return [path, { size }]
      })

    const manifest = {
      generated: Date.now(),
      files: Object.fromEntries(entries),
      summary: {
        files: entries.length,
        totalSize
      }
    }

    // eslint-disable-next-line promise/no-nesting, promise/always-return
    return ensureDir('dist').then(() => {
      writeFileSync('dist/manifest.json', JSON.stringify(manifest, null, 2), 'utf8')
    })
  })
