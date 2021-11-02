module.exports = {
  styles: [
    { href: '/dist/css/sfds.css' },
    { href: '/dist/css/fonts.css' },
    { href: '/dist/css/docs.css' }
  ],
  scripts: [
    { src: '/dist/js/docs.js' },
    { src: 'https://unpkg.com/@sfgov/icons@0.0.1/dist/sfgov-icons.umd.js', defer: true },
    { src: 'https://unpkg.com/@github/clipboard-copy-element@1.1.2/dist/index.umd.js', defer: true },
    { src: 'https://unpkg.com/@github/details-dialog-element@3.0.4/dist/index.umd.js' }
  ]
}
