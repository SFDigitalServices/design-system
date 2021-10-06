const prettier = require('prettier')

module.exports = (content, path) => {
  const ext = path.split('.').pop()
  switch (ext) {
    case 'html':
    case 'json':
      return prettier.format(content, { parser: ext })
    default:
      return content
  }
}
