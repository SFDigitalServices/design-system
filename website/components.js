/**
 * @typedef {{
 *  id?: string,
 *  name: string,
 *  href: string,
 *  status?: 'production' | 'development' | 'experiment' | 'design',
 *  story?: {
 *    id?: string,
 *    name?: string,
 *    path?: string
 *  },
 *  design?: {
 *    name?: string,
 *    href?: string
 *  }
 * }} ComponentMeta
 */

/**
 * @type {ComponentMeta[]}
 */
const components = [
  {
    name: 'Button',
    href: '/components/buttons/',
    story: {
      path: 'components-buttons*'
    }
  },
  {
    name: 'Keyboard',
    href: '/components/kbd/',
    story: {
      name: '<kbd>',
      path: 'components-keyboard*'
    }
  },
  {
    name: 'Icons',
    href: '/components/icons/',
    story: {
      path: 'components-icons*'
    }
  },
  {
    name: 'Details',
    href: '/components/details/',
    story: {
      name: 'Accordion',
      path: 'components-controls--accordion'
    }
  }
]

/**
 * @param {string} path
 * @returns {ComponentMeta}
 */
function getComponentByPath (path) {
  return path ? components.find(comp => comp.path === path || path.startsWith(comp.pathPrefix)) : undefined
}

module.exports = {
  components,
  getComponentByPath
}
