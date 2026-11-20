import type { Result } from 'postcss'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import preset from './tailwind-preset'

describe('utility styles', () => {
  const utilities: Array<{
    className: string
    selector: string | RegExp
    styles: Record<string, string>
  }> = [
    {
      className: 'theme-teal:text-black',
      selector: /\[data-theme="teal"\] \.theme-teal\\:text-black/,
      styles: {
        color: `rgb(11 12 12 / var(--tw-text-opacity, 1))`
      }
    }
  ]

  let result: Result
  beforeAll(async () => {
    result = await postcss([
      tailwindcss({
        presets: [preset],
        content: [{ raw: utilities.map((u) => u.className).join(' ') }]
      })
    ]).process('@tailwind utilities;', { from: undefined })
  })

  it.each(utilities)(
    '.$className generates "$selector" with $styles',
    ({ selector, styles }) => {
      expect(result).toHaveSelector(selector, styles)
    }
  )
})
