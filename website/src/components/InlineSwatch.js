import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function InlineSwatch ({ as: Comp = 'code', className, children, label, addBorder, value, ...rest }) {
  if (!isColorValue(value)) {
    return <Comp {...{ className, children, ...rest }} />
  }
  return (
    <>
      <span className='inline-block font-medium text-slate-2'>
        {label}&nbsp;
      </span>
      <Comp className={clsx('inline-flex items-center px-4', className)} {...rest} style={{ borderRadius: '14px' }}>
            <span className={`w-16 h-16 mr-4 block rounded ${addBorder ? 'border-solid border-1 border-grey-4' : ''}`} style={{ backgroundColor: value }} />
            {value}
      </Comp>
    </>
  )
}

InlineSwatch.propTypes = {
  as: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.element,
  label: PropTypes.string.isRequired,
  addBorder: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.string
}

function isColorValue (str) {
  return typeof str === 'string' && /^(#[a-f0-9]{3,6}|(rgb|rgba|hsl|hsla)\()/.test(str)
}
