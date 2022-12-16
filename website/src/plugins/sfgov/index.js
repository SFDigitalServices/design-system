const { SSRStyle } = require('@sfgov/react')

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = context => ({
  injectHtmlTags ({ content }) {
    const links = SSRStyle.getPreloadLinks()
    console.log('content:', content)
    return {
      name: 'sfgov-design-system',
      headTags: [
        ...links.map(attributes => ({
          tagName: 'link',
          attributes
        }))
      ],
      configurePostCss (postcssOptions) {
        // Appends TailwindCSS and AutoPrefixer.
        postcssOptions.plugins.push(require('tailwindcss'))
        postcssOptions.plugins.push(require('autoprefixer'))
        return postcssOptions
      }
    }
  }
})
