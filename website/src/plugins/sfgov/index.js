const { SSRStyle } = require('@sfgov/react')

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = context => ({
  injectHtmlTags ({ content }) {
    const links = SSRStyle.getPreloadLinks()
    console.log('content:', content)
    return {
      headTags: [
        ...links.map(attributes => ({
          tagName: 'link',
          attributes
        }))
      ]
    }
  }
})
