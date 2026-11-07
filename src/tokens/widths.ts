import type { TokenMap } from './types'

/**
 * These are "ideal" content widths that accommodate
 * nice line lengths and evenly sized grids with standard
 * spacing (20 or 28px)
 */
export default {
  sm: {
    value: '340px',
    type: 'dimension'
  },
  md: {
    value: '500px',
    type: 'dimension'
  },
  lg: {
    value: '884px',
    type: 'dimension'
  },
  xl: {
    value: '1076px',
    type: 'dimension'
  }
} satisfies TokenMap
