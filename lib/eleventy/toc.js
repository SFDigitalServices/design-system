const { JSDOM } = require('jsdom')

module.exports = function eleventyTableOfContents (config) {
  config.addFilter('toc', function getTOC (content, options) {
    const { ignore } = Object.assign({}, config, options)
    const { document } = new JSDOM(content).window

    for (const hidden of document.querySelectorAll('[hidden], .hidden')) {
      hidden.remove()
    }

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

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i]
      for (let j = i - 1; j >= 0; j--) {
        const previous = headings[j]
        if (previous.level === heading.level - 1) {
          heading.parent = previous
          previous.children.push(heading)
          break
        }
      }
    }

    const top = headings.sort((a, b) => a.level - b.level)[0]
    return headings.filter(h => h.level === top.level)
  })
}

function getLevel (element) {
  return +element.tagName.charAt(1)
}
