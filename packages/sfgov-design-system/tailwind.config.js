module.exports = {
  presets: [
    require('./tailwind.preset')
  ],
  content: [
    'docs/**/*.md?',
    'src/**/*.{js,jsx,ts,tsx}'
  ]
}
