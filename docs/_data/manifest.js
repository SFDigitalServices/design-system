const globby = require('globby')
const { stat } = require('fs').promises

module.exports = async function loadManifest () {
  const paths = await globby('dist/**/*.{css,*js}')
  return Promise.all(
    paths.map(path => {
      return stat(path)
        .then(({ size }) => ({
          path,
          size
        }))
        .catch(() => ({ path, size: undefined }))
    })
  ).then(results => results.reduce((map, { path, size }) => {
    map[path] = { size }
    return map
  }, {}))
}
