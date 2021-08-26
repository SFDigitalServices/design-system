const { spawnSync } = require('child_process')

module.exports = { git }

function git (...args) {
  try {
    return spawnSync('git', args, { encoding: 'utf8' })
      .stdout
      .trim()
  } catch (error) {
    console.warn('unable to call `git %s`:', args.join(' '), error)
    return undefined
  }
}
