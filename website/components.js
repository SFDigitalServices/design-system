/**
 * @type {{
 *  id?: string,
 *  name: string,
 *  href: string,
 *  story: {
 *    id?: string,
 *    name?: string,
 *    path?: string
 *  }
 * }[]}
 */
export const components = [
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
].sort((a, b) => a.name.localeCompare(b.name))

/**
 * @param {string} path
 */
export function getComponentByPath (path) {
  return path ? components.find(comp => comp.path === path || path.startsWith(comp.pathPrefix)) : undefined
}
