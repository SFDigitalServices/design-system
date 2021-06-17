const { URLSearchParams } = require('url')

module.exports = {
  styles: [
    { href: '/dist/css/sfds.css' },
    { href: '/dist/css/docs.css' },
    ...[
      {
        name: 'Rubik',
        weights: [300, 400, 500]
      },
      {
        name: 'Noto Sans TC',
        weights: [300, 400, 500],
        display: 'swap',
        subset: 'chinese-traditional'
      },
      {
        name: 'Roboto Mono',
        weights: [400],
        display: 'swap'
      }
    ]
      .map(({ name, weights = [], ...rest }) => {
        const family = `${name}:${weights.join(',')}`
        const query = new URLSearchParams({ family, ...rest })
        return {
          href: `https://fonts.googleapis.com/css?${query}`
        }
      })
  ],
  scripts: [
    { src: '/dist/js/docs.js' },
    { src: 'https://unpkg.com/@sfgov/icons@0.0.1/dist/sfgov-icons.umd.js', defer: true },
    { src: 'https://unpkg.com/@github/clipboard-copy-element@1.1.2/dist/index.umd.js', defer: true }
  ]
}
