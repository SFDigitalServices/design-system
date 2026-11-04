import type { ThemeConfig } from 'tailwindcss/types/config'
import { widths } from '../tokens'
import { tokenMap } from './utils'

export default {
  ...tokenMap(widths)
} satisfies ThemeConfig['width']
