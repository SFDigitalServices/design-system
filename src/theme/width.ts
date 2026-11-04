import type { ThemeConfig } from 'tailwindcss/types/config'
import { widths } from '../tokens'
import { pxMap, tokenMap } from './utils'

export default {
  ...tokenMap(widths),
  ...pxMap([80])
} satisfies ThemeConfig['width']
