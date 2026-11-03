const buildPath = 'tokens/'
const options = { outputReferences: true, showFileHeader: false }
/* Since style-dictionary generates a timestamp, and there is a timing
 * gap between local push and CI, Lerna publish will complain about uncommitted
 * changes during CI. The option above is a workaround.
 */

module.exports = {
  source: ['tokens/**/*.json'],
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
      buildPath,
      options,
      files: [
        {
          destination: 'colors.js',
          format: 'javascript/module',
          filter: { type: 'color' }
        },
        {
          destination: 'spacing.js',
          format: 'javascript/module',
          filter: { type: 'spacing' }
        }
      ]
    }
  }
}
