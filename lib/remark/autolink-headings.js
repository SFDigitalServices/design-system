module.exports = {
  plugin: 'remark-autolink-headings',
  options: {
    behavior: 'append',
    content: {
      type: 'text',
      value: '#'
    },
    linkProperties: {
      ariaHidden: 'true',
      tabIndex: -1,
      className: 'ml-8 no-underline font-regular'
    }
  }
}
