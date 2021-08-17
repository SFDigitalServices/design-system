const { JSDOM } = require('jsdom')

module.exports = function eleventyTableOfContents (config) {
  config.addFilter('toc', function getTOC (content, options) {
    const { ignore } = Object.assign({}, config, options)
    const { document } = new JSDOM(content).window

    const headings = Array.from(
      document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    )
      .filter(ignore
        ? el => !el.matches(ignore)
        : () => true)
      .filter(el => el.id)
      .map(element => ({
        href: `#${element.id}`,
        text: element.textContent,
        html: element.innerHTML,
        level: getLevel(element),
        children: []
      }))

    if (!headings.length) {
      return null
    }

    for (const [index, heading] of Object.entries(headings)) {
      const parentLevel = heading.level - 1
      const parent = headings.slice(0, index)
        .find(other => other.level === parentLevel)
      if (parent) {
        parent.children.push(heading)
      }
    }

    const top = headings.sort((a, b) => a.level - b.level)[0]
    return headings.filter(h => h.level === top.level)
  })
}

function getLevel (element) {
  const match = element.tagName.match(/\d$/)
  return match ? Number(match[0]) : 0
}
