/** @type {import('svgo/lib/svgo').Config} */
module.exports = {
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 2
  },
  plugins: [
    'removeDimensions',
    { name: 'removeViewBox', active: false },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'stroke', 'id', 'clipPath', 'clip-path', 'clipRule']
      }
    },
    'removeUselessDefs',
    'removeXMLNS',
    'collapseGroups',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: ['fill="currentcolor"']
      }
    }
  ]
}
