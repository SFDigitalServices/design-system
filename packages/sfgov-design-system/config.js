const buildPath = 'src/tokens/style-dictionary/'
const options = { showFileHeader: false }
/* Since style-dictionary generates a timestamp, and there is a timing
 * gap between local push and CI, Lerna publish will complain about uncommitted
 * changes during CI. The option above is a workaround.
 */

module.exports = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath,
      options,
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables'
        }
      ]
    },
    web: {
      transforms: ['attribute/cti', 'name/cti/camel'],
      buildPath,
      options,
      files: [
        {
          destination: 'colors.js',
          format: 'javascript/es6',
          filter: { attributes: { category: 'color' } }
        }
      ]
    }
  }
}
