const { getPreloadLinks } = require('@sfgov/react')

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = context => ({
  injectHtmlTags ({ content }) {
    // FIXME: do something with `content` here?
    const links = getPreloadLinks()
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
