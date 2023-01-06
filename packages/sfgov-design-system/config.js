const buildPath = 'src/tokens/style-dictionary/'

module.exports = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath,
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
