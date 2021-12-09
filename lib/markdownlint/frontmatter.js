const yaml = require('js-yaml')

module.exports = {
  names: ['front-matter'],
  description: 'YAML frontmatter',
  tags: ['yaml'],
  function: (params, onError) => {
    const { config, frontMatterLines } = params
    const { required_keys: requiredKeys = [] } = config

    if (frontMatterLines?.length < 1) {
      onError({
        lineNumber: 1,
        detail: 'missing "---" delimiters',
        context: frontMatterLines.join('\n')
      })
    } else {
      const rawFrontMatter = frontMatterLines.join('\n').trim()
      const content = rawFrontMatter.split('\n')
        .slice(1)
        .slice(0, -1)
        .join('\n')

      let parsed
      try {
        parsed = yaml.load(content, 'utf8')
      } catch (error) {
        onError({
          lineNumber: 1,
          detail: 'unable to parse YAML',
          context: rawFrontMatter
        })
        return
      }

      const missing = requiredKeys
        .filter(key => typeof parsed?.[key] === 'undefined')
      if (missing.length) {
        onError({
          lineNumber: 1,
          detail: `missing keys: "${missing.join('", "')}"`,
          context: content
        })
      }
    }
  }
}
