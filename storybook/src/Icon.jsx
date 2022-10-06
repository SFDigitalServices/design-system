import React from 'react'
import PropTypes from 'prop-types'
import { icons } from 'sfgov-design-system/src/icons/data.json'
import clsx from 'clsx'

export const symbols = Object.keys(icons)

export default function Icon ({ size, width = size, height = size, className, class: svgClassName, ...rest }) {
  return (
    <sfgov-icon width={width} height={height} class={clsx(className, svgClassName)} {...rest} />
  )
}

Icon.propTypes = {
  symbol: PropTypes.oneOf(symbols)
}
