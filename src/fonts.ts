import type { FontSpec } from './types'
// istanbul ignore file

/**
 * TODO: derive weights to load by cross-referencing `fontWeight` values in
 * `theme.fontSize` with the typography components that use each style.
 */

export const ROBOTO_FLEX: FontSpec = {
  name: 'Roboto Flex',
  fallbacks: ['ui-sans-serif', 'sans-serif'],
  weights: {
    light: 300,
    normal: 400,
    bold: 700
  }
}

export const ROBOTO_SLAB: FontSpec = {
  name: 'Roboto Slab',
  fallbacks: ['ui-serif', 'serif'],
  weights: {
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
