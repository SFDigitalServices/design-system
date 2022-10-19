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
 *  designs?: {
 *    name?: string,
 *    href?: string,
 *    type?: string
 *  }[]
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
    },
    designs: [{
      href: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5895%3A3285'
    }]
  },
  {
    name: 'Keyboard',
    href: '/components/kbd/',
    story: {
      name: '<kbd>',
      path: 'components-keyboard*'
    },
    designs: [{
      href: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=736%3A0'
    }]
  },
  {
    name: 'Icons',
    href: '/components/icons/',
    story: {
      path: 'components-icons*'
    },
    designs: [{
      href: 'https://www.figma.com/file/P0usvPQSAKOzqcH5mPFf1u/Assets?node-id=38%3A8'
    }]
  },
  {
    name: 'Details',
    href: '/components/details/',
    story: {
      name: 'Accordion',
      path: 'components-controls--accordion'
    },
    designs: [{
      href: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3217%3A230'
    }]
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
