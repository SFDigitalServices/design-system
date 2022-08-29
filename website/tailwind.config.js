module.exports = {
  presets: [
    require('sfgov-design-system/tailwind.preset')
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './docs/**/*.{md,mdx}',
    './src/**/*.{js,jsx}'
  ]
}
