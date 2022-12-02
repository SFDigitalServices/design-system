import React from 'react'
import { styled } from '../stitches.config'

type IconSymbol = 'plus' | 'minus'

type IconProps = React.ComponentPropsWithoutRef<'svg'> & {
  symbol: IconSymbol
}

export const Icon = styled(function IconImpl ({ symbol, ...rest }: IconProps) {
  return <svg viewBox='0 0 20 20' data-symbol={symbol} {...rest}>
    {/* TODO */}
    <circle r='10' cx='10' cy='10' />
  </svg>
}, {
  fill: 'currentcolor'
})
