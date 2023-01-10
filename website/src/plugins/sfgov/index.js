const { getPreloadLinks } = require('@sfgov/design-system/react')

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = context => ({
  name: 'sfgov-design-system',
  injectHtmlTags ({ content }) {
    // FIXME: do something with `content` here?
    const links = getPreloadLinks()
    return {
      headTags: [
        ...links.map(attributes => ({
          tagName: 'link',
          attributes
        }))
      ]
    }
  },
  configurePostCss (postcssOptions) {
    // Appends TailwindCSS and AutoPrefixer.
    postcssOptions.plugins.push(require('tailwindcss'))
    postcssOptions.plugins.push(require('autoprefixer'))
    return postcssOptions
  }
})
