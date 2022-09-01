import React from 'react'
import PropTypes from 'prop-types'
import { InlineCode } from './Markdown'

export default function InlineSwatch ({ className, children, label, addBorder, value, ...rest }) {
  return (
    <>
      <span className='inline-block font-medium text-slate-2 dark:text-blue-2'>
        {label || children}&nbsp;
      </span>
      <InlineCode rounded={false} className='inline-flex items-center pr-8' style={{ borderRadius: '14px' }} {...rest}>
        <span
          className={`w-16 h-16 mr-4 block rounded ${addBorder ? 'border-solid border-1 border-grey-4' : ''}`}
          style={{ backgroundColor: value }}
        />
        {value}
      </InlineCode>
    </>
  )
}

InlineSwatch.defaultProps = {
  addBorder: false
}

InlineSwatch.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string.isRequired,
  addBorder: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.string
}
