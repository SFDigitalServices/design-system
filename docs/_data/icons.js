const { icons } = require('../../src/icons/data.json')

module.exports = Object.entries(icons)
  .map(([symbol, icon]) => ({ ...icon, symbol }))
  .sort((a, b) => a.symbol.localeCompare(b.symbol))
