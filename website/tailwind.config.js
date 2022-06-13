module.exports = {
  presets: [
    require('sfgov-design-system/tailwind.preset')
  ],
  content: {
    enabled: true,
    content: [
      'docs/**/*.{md,mdx}',
      'src/**/*.{js,jsx,ts,tsx}'
    ]
  }
}
