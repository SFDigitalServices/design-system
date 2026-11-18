import type { FontSpec } from './types'

// istanbul ignore file

export const ROBOTO_FLEX: FontSpec = {
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
}

export const ROBOTO_SLAB: FontSpec = {
  name: 'Roboto Slab',
  fallbacks: ['ui-serif', 'serif'],
  weights: {
    light: 300,
    normal: 400,
    bold: 700
  }
}

export const ROBOTO_MONO: FontSpec = {
  name: 'Roboto Mono',
  fallbacks: ['ui-monospace', 'monospace'],
  weights: {
    normal: 400
  }
}

export const NOTO_SANS_TC: FontSpec = {
  name: 'Noto Sans TC',
  fallbacks: ['ui-sans-serif', 'sans-serif'],
  weights: {
    light: 300,
    normal: 400,
    bold: 500
  }
}
