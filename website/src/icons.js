/**
 * This is a common interface into the raw icons data, which includes
 * this SVG. The default export is an array of icon objects.
 */
import data from '@sfgov/design-system/css/src/icons/data.json'

/**
 * @typedef {{
 *  id: string
 *  name: string
 *  svg: string
 *  url: string
 *  tags: string[]
 *  filename: string
 * }[]}
 */
export default Object.values(data.icons)
  .sort((a, b) => a.id.localeCompare(b.id))
