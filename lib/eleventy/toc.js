const cheerio = require('cheerio')

module.exports = function eleventyTableOfContents (config) {
  config.addFilter('toc', function getTOC (content) {
    const $ = cheerio.load(content)

    const headings = $('h1, h2, h3, h4, h5, h6')
      .filter('[id]:not([hidden], .hidden)')
      .toArray()
      .map(el => {
        const $el = $(el)
        // remove links
        $el.find('a').remove()
        return {
          href: `#${el.attribs.id}`,
          text: $el.text(),
          html: $el.html(),
          level: getLevel(el),
          children: []
        }
      })

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
  return Number(element.name.charAt(1))
}
