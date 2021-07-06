const fetch = require('node-fetch')
const pkg = require('../package.json')

const { HEROKU_SLUG_COMMIT = '' } = process.env
const gitSha = HEROKU_SLUG_COMMIT.substr(0, 7)

// only load it once
const promise = getPackageInfo()

module.exports = () => promise

async function getPackageInfo () {
  const { name, version: localVersion } = pkg

  const possibleVersions = [
    localVersion,
    gitSha && `${localVersion}.rc-${gitSha}`,
    gitSha && `0.0.0-${gitSha}`
  ].filter(Boolean)

  console.info('possible package versions:', possibleVersions)

  let version
  for (const possibleVersion of possibleVersions) {
    let published = false
    try {
      await fetch(`https://unpkg.com/${name}@${possibleVersion}/package.json`)
    } catch (error) {
      published = false
    }
    if (published) {
      version = possibleVersion
      break
    }
  }

  if (!version) {
    version = await fetch(`https://unpkg.com/${name}/package.json`)
      .then(res => res.json())
      .then(published => {
        console.info('[package] falling back to latest version:', published.version)
        return published.version
      })
      .catch(error => {
        console.error('[package] unable to fetch latest version:', error)
        return localVersion
      })
  }

  return {
    name,
    version
  }
}
