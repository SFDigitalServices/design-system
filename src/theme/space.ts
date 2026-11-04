import type { ThemeConfig } from 'tailwindcss/types/config'
import tokens from '../tokens/spacing'
import { pxMap, tokenMap } from './utils'

export default {
  fit: 'fit-content',
  // TODO: replace these with tokens
  ...pxMap([0, 2, 4, 8, 12, 16, 20, 28, 40, 60, 80, 96]),
  ...tokenMap(tokens)
} satisfies ThemeConfig['space']
