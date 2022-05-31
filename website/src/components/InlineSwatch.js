import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function InlineSwatch ({ as: Comp = 'code', className, children, value = children, ...rest }) {
  if (!isColorValue(value)) {
    return <Comp {...{ className, children, ...rest }} />
  }
  return (
    <Comp className={clsx('inline-flex', className)} {...rest}>
      <span className={'w-16 h-16 mr-4 block rounded-2'} style={{ backgroundColor: value }} />
      {children}
    </Comp>
  )
}

InlineSwatch.propTypes = {
  as: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.element,
  className: PropTypes.string,
  value: PropTypes.string
}

function isColorValue (str) {
  return typeof str === 'string' && /^(#[a-f0-9]{3,6}|(rgb|rgba|hsl|hsla)\()/.test(str)
}
