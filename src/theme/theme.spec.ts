import type { Result } from 'postcss'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import { colors } from './colors'
import theme from './index'

describe('utility styles', () => {
  const utilities: Record<string, Record<string, string>> = {
    'w-80': { width: '80px' },
    'max-w-80': { 'max-width': '80px' },
    'h-80': { height: '80px' },
    'p-20': { padding: '20px' },
    'm-28': { margin: '28px' },
    'gap-40': { gap: '40px' },
    'rounded-4': { 'border-radius': '4px' },
    'border-3': { 'border-width': '3px' },
    'leading-56': { 'line-height': '56px' },
    'text-desktop-display-xxxl': { 'line-height': '56px' },
    'bg-white': {
      'background-color': 'rgb(252 252 252 / var(--tw-bg-opacity, 1))'
    },
    'bg-theme-accent': {
      'background-color': `var(--color-theme-accent, ${colors.accent500})`
    },
    'bg-theme-secondary': {
      'background-color': `var(--color-theme-secondary, ${colors.primary50})`
    }
  }

  let result: Result
  beforeAll(async () => {
    result = await postcss([
      tailwindcss({
        theme,
        content: [{ raw: Object.keys(utilities).join(' ') }]
      })
    ]).process('@tailwind utilities;', { from: undefined })
  })

  it.each(
    Object.entries(utilities).map(([className, values]) => ({
      className,
      values
    }))
  )('generates .$className selector with $values', ({ className, values }) => {
    expect(result).toHaveSelector(`.${className}`, values)
  })
})
