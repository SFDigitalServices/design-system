const prettier = require('prettierx')
const options = {
  htmlVoidTags: true
}

module.exports = (content, path) => {
  const ext = path.split('.').pop()
  switch (ext) {
    case 'html':
      return prettier.format(content, { ...options, parser: ext })
    default:
      return content
  }
}
