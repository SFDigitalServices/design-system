import type { Config } from 'tailwindcss'
import preset from './src/tailwind-preset'

const config: Config = {
  content: ['./**/*.{ts,tsx}', '!/node_modules/'],
  theme: {
    extend: {}
  },
  presets: [preset]
}

export default config
