const breakpoints = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}

const media = Object.fromEntries(
  Object.entries(breakpoints).map(([name, value]) => [
    name,
    `(min-width: ${value})`
  ])
)

module.exports = {
  breakpoints,
  media
}
