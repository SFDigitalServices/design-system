#!/usr/bin/env node
const globby = require('globby')
const { statSync } = require('fs')
const globs = process.argv.slice(2)

globby([...globs, '!**/manifest.json']).then(found => {
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

  console.log(JSON.stringify(manifest, null, 2))
})