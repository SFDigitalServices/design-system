module.exports = {
  presets: [
    'sfgov-design-system/tailwind.preset'
  ],
  purge: {
    enabled: true,
    content: [
      'docs/**/*.{md,mdx}',
      'src/**/*.{js,jsx,ts,tsx}'
    ]
  }
}
