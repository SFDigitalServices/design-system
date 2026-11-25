#!/usr/bin/env -S npx tsx
import { ROBOTO_FLEX, ROBOTO_SLAB } from '../src/fonts'

const fonts = [ROBOTO_FLEX, ROBOTO_SLAB]

console.error('Google fonts URL:')
console.log(getGoogleFontsURL())

function getGoogleFontsURL() {
  // "https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@300;400;500;600;700;800&family=Roboto+Slab:wght@300;400;500;600;700&display=swap"
  const url = new URL('https://fonts.googleapis.com/css2')
  for (const font of fonts) {
    url.searchParams.append(
      'family',
      `${font.name}:wght@${Object.values(font.weights).join(';')}`
    )
  }
  url.searchParams.set('display', 'swap')

  return (
    url
      .toString()
      // un-escape these
      .replace(/%3A/g, ':')
      .replace(/%3B/g, ';')
      .replace(/%40/g, '@')
      .replace(/&/g, '&amp;')
  )
}
