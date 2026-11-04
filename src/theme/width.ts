import type { ThemeConfig } from 'tailwindcss/types/config'
import { widths } from '../tokens'
import { tokenMap } from './utils'

/**
 * These are "ideal" content widths that accommodate
 * nice line lengths and evenly sized grids with standard
 * spacing (20 or 28px)
 */
export default {
  ...tokenMap(widths)
} satisfies ThemeConfig['width']
