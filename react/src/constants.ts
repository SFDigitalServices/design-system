import type { FontSpec } from './types'

export const HOCUS_SELECTOR = '&:hover, &:focus'

export const defaultFonts: FontSpec[] = [
  {
    name: 'Noto Sans TC',
    fallbacks: ['ui-sans-serif', 'sans-serif'],
    weights: {
      light: 300,
      normal: 400,
      bold: 500
    }
  },
  {
    name: 'Roboto Flex',
    fallbacks: ['ui-sans-serif', 'sans-serif'],
    weights: {
      light: 300,
      normal: 400,
      bold: 700
    },
    googleFont: {
      optical: true,
      weights: {
        light: [[8, 144], 300],
        normal: [[8, 144], 400],
        bold: [[8, 144], 700]
      }
    }
  },
  {
    name: 'Roboto Slab',
    fallbacks: ['ui-serif', 'serif'],
    weights: {
      light: 300,
      normal: 400,
      bold: 700
    }
  },
  {
    name: 'Roboto Mono',
    fallbacks: ['ui-monospace', 'monospace'],
    weights: {
      normal: 400
    }
  },
  {
    name: 'Rubik',
    fallbacks: ['ui-sans-serif', 'san-serif'],
    weights: {
      light: 300,
      normal: 400,
      bold: 600
    }
  }
]
