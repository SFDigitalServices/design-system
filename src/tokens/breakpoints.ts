import type { TokenMap } from './types'

/**
 * TODO: Move these to tokens
 */
export default {
  xs: {
    type: 'dimension',
    value: '375px'
  },
  sm: {
    type: 'dimension',
    value: '640px'
  },
  md: {
    type: 'dimension',
    value: '768px'
  },
  lg: {
    type: 'dimension',
    value: '1024px'
  },
  xl: {
    type: 'dimension',
    value: '1280px'
  }
} satisfies TokenMap
