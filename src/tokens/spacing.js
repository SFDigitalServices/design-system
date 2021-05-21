module.exports = {
  0: '0',
  ...pxMap([
    4,
    8,
    16,
    20,
    28,
    40,
    48,
    60,
    80,
    100
  ])
}

function pxMap (values) {
  const map = {}
  for (const n of values) {
    map[n] = `${n}px`
  }
  return map
}
