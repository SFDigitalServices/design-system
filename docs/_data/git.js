const { spawnSync } = require('child_process')
const pkg = require('../../package.json')

module.exports = {
  repo: `https://github.com/${pkg.repository}`,
  defaultBranch: 'main',
  get branch () {
    try {
      return git(['symbolic-ref', '--short', 'HEAD'])
    } catch (error) {
      console.warn('unable to get git branch:', error)
      return undefined
    }
  },
  get sha () {
    try {
      return git(['rev-parse', '--short', 'HEAD'])
    } catch (error) {
      console.warn('unable to get git SHA:', error)
      return undefined
    }
  }
}

function git (args, execOptions) {
  return spawnSync('git', args, Object.assign({
    encoding: 'utf8'
  }, execOptions)).stdout.trim()
}
