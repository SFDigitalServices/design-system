import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

/*
TODO:
- Add copy icon
- Add copy function
*/

export default function ColorSwatch ({ value, label, addBorder, className, children, ...rest }) {
  return (
    <div className={clsx('flex flex-wrap w-40 my-4', className)} {...rest}>
      <div
        className={`h-24 w-full rounded ${addBorder ? 'border border-black' : ''}`}
        style={{ backgroundColor: value }}
      />
      <div className='w-full'>
        {label ? <div className='font-semibold px-1 py-0.5'>{label}</div> : null}
        <clipboard-copy value={value}>
          <button
            type='button'
            className='w-full font-mono text-left text-slate-500 hover:bg-slate-200 px-1 py-0.5'
            data-copy-feedback='Copied'
          >
            <div>{value}</div>
            {children}
          </button>
        </clipboard-copy>
      </div>
    </div>
  )
}

ColorSwatch.defaultProps = {
  addBorder: false
}

ColorSwatch.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  addBorder: PropTypes.bool
}