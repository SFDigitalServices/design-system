/** @type {import('tailwindcss/types').Config} */
module.exports = {
  presets: [
    require('../tailwind.preset')
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    fontStyle: true
  },
  content: [
    './docs/**/*.{md,mdx}',
    './src/**/*.{js,jsx}'
  ]
}
