/** @type {import('tailwindcss/types').Config} */
module.exports = {
  presets: [
    require('@sfgov/design-system/css/tailwind.preset')
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
