import React from 'react'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'

function LogoImage ({ logo }) {
  const { withBaseUrl } = useBaseUrlUtils()
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src)
  }
  return (
    <ThemedImage
      className='footer__logo'
      alt={logo.alt}
      sources={sources}
      width={logo.width}
      height={logo.height}
    />
  )
}
export default function FooterLogo ({ logo }) {
  return (
    <LogoImage logo={logo} />
  )
}
