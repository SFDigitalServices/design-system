module.exports = {
  0: '0',
  ...pxMap([
    2,
    4,
    8,
    16,
    20,
    24, // TODO: deprecate @3
    28,
    40,
    48, // TODO: deprecate @3
    60,
    80,
    96,
    100 // TODO [>=3]: deprecate in favor of 96
  ])
}

function pxMap (values) {
  const map = {}
  for (const n of values) {
    map[n] = `${n}px`
  }
  return map
}
