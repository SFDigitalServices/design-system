import containerQueries from '@tailwindcss/container-queries'
import ariaAttributes from '@thoughtbot/tailwindcss-aria-attributes'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import formioPlugin from './formio/tailwind-plugin'
import theme from './theme'

// Keep in sync with the [data-theme] values in src/css/colors.css.
const THEMES = [
  'blue',
  'teal',
  'orange',
  'green',
  'pink',
  'brown',
  'red',
  'black'
]

const preset: Partial<Config> = {
  theme,
  plugins: [
    containerQueries,
    ariaAttributes,
    plugin(({ addUtilities, addVariant, matchVariant, theme }) => {
      addVariant('link', '& a')
      addUtilities({
        '.outline-focus': {
          outlineStyle: 'solid',
          outlineColor: theme<string>('colors.primary500'),
          outlineWidth: '3px',
          outlineOffset: '4px'
        }
      })
      addUtilities({
        '.appearance-none': {
          appearance: 'none',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none'
        },
        // TODO: deprecate by making this part of <Checkbox>
        '.check-shadow-inner': {
          'box-shadow': `inset -.005rem -.005rem 0 .45rem ${theme<string>(
            'colors.white'
          )}`
        }
      })

      matchVariant(
        'theme',
        (value) => [`&[data-theme="${value}"]`, `[data-theme="${value}"] &`],
        {
          values: Object.fromEntries(THEMES.map((name) => [name, name]))
        }
      )
    }),
    // TODO: remove
    formioPlugin
  ]
}

export default preset
