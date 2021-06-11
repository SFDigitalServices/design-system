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
    { src: '/dist/js/sfds.js' }
  ]
}
