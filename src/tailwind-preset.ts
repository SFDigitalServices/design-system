import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import containerQueries from '@tailwindcss/container-queries'
import ariaAttributes from '@thoughtbot/tailwindcss-aria-attributes'
import theme from './theme'
import formioPlugin from './formio/tailwind-plugin'

const preset: Partial<Config> = {
  theme,
  plugins: [
    containerQueries,
    ariaAttributes,
    plugin(({ addVariant, addUtilities, theme }) => {
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
    }),
    // TODO: remove
    formioPlugin
  ]
}

export default preset
