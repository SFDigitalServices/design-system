import React from 'react'
import PropTypes from 'prop-types'
import { icons } from 'sfgov-design-system/src/icons/data.json'

export const symbols = Object.keys(icons)

export default function Icon ({ size, width = size, height = size, ...rest }) {
  return (
    <sfgov-icon width={width} height={height} {...rest} />
  )
}

Icon.propTypes = {
  symbol: PropTypes.oneOf(symbols)
}