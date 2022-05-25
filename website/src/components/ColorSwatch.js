import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import clsx from 'clsx'

/*
TODO:
- Add copy icon
- Add copy function
*/

export default function ColorSwatch ({ value, label, addBorder, className, children, ...rest }) {
  const [copied, setCopied] = useState()
  if (copied) {
    setTimeout(() => setCopied(false), 1000)
  }
  return (
    <div className={clsx('flex flex-wrap w-40 my-4', className)} {...rest}>
      <div
        className={`h-24 w-full rounded ${addBorder ? 'border-solid border-1 border-grey-4' : ''}`}
        style={{ backgroundColor: value }}
      />
      <div className='w-full'>
        {label ? <div className='font-semibold px-1 py-0.5'>{label}</div> : null}
        <BrowserOnly>
          {() => (
            <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
              <button
                type='button'
                className='w-full font-mono text-left text-slate-500 hover:bg-slate-200 px-1 py-0.5 relative'
              >
                <div>{value}</div>
                {children}
                {copied ? <span className='absolute bg-black text-white'>Copied!</span> : null}
              </button>
            </CopyToClipboard>
          )}
        </BrowserOnly>
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
