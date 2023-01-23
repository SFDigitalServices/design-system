/**
 * This is a common interface into the raw icons data, which includes
 * this SVG. The default export is an array of icon objects.
 */
import data from '../../icons/svg/index.json'

/**
 * @typedef {{
 *  id: string
 *  name: string
 *  svg: string
 *  href: string
 *  file: string
 *  size: { width: number, height: number }
 * }[]}
 */
export default Object.values(data.components)
  .sort((a, b) => a.id.localeCompare(b.id))
