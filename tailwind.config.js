/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{ts,tsx}',
    '!/node_modules/'
  ],
  theme: {
    extend: {}
  },
  presets: [require('./tailwind.preset')]
}
