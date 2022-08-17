import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import clsx from 'clsx'

export default function ColorSwatch ({ value, label, addBorder, className, children, ...rest }) {
  const [copied, setCopied] = useState()
  const [isHover, setIsHover] = useState(false)
  const ariaLabelText = `Copy ${label} hex value`

  if (copied) {
    setTimeout(() => setCopied(false), 1000)
  }
  return (
    <div className={clsx('flex flex-wrap w-1/4', className)} {...rest}>
      <div
        className={`h-100 w-full rounded-4 ${addBorder ? 'border-solid border-1 border-grey-4' : ''}`}
        style={{ backgroundColor: value }}
      />
      <div className='w-full'>
        {label ? <div className='font-medium px-8 pt-4 text-slate-4 dark:text-slate-1'>{label}</div> : null}
        <BrowserOnly>
          {() => (
            <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
              <button
                type='button'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onFocus={() => setIsHover(true)}
                onBlur={() => setIsHover(false)}
                aria-label={ariaLabelText}
                className='w-full button-reset text-left text-slate-3 dark:text-grey-2 hocus:bg-slate-1 dark:hover:text-slate-3 dark:focus:text-slate-3 px-8 py-4 relative'
              >
                <div className='flex justify-between items-center font-mono'>
                  {value}
                  <div className={isHover ? 'inherit' : 'text-white'}>
                  <sfgov-icon symbol='clipboard'></sfgov-icon>
                  </div>
                </div>
                {children}
                {copied ? <span className='absolute -bottom-28 bg-slate-4 rounded-4 text-white px-8 py-4'>Copied!</span> : null}
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
  addBorder: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired
}
