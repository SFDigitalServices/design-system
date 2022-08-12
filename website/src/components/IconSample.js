import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import clsx from 'clsx'

export default function IconSample ({
  iconInfo
}) {
  const [copied, setCopied] = useState()
  const [isHover, setIsHover] = useState(false)
  const ariaiconInfoText = `Copy ${iconInfo} icon name`

  if (copied) {
    setTimeout(() => setCopied(false), 1000)
  }
  return (
    <div className={clsx('flex flex-wrap w-1/4')}>
      <div className={'h-100 w-full border-grey-2 dark:border-grey-dark border-1 border-solid flex items-center justify-center'}>
        <sfgov-icon symbol={iconInfo}></sfgov-icon>
      </div>
      <div className='w-full'>
        <BrowserOnly>
          {() => (
            <CopyToClipboard text={iconInfo} onCopy={() => setCopied(true)}>
              <button
                type='button'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onFocus={() => setIsHover(true)}
                onBlur={() => setIsHover(false)}
                aria-iconInfo={ariaiconInfoText}
                className='w-full button-reset text-slate-3 dark:text-slate-1 dark:hover:text-slate-3 dark:focus:text-slate-3 hocus:bg-slate-1 px-8 py-4 relative text-left'
              >
                <div className='flex justify-between items-center font-mono' style={{ textTransform: 'lowercase' }}>
                  {iconInfo}
                  <div className={isHover ? 'inherit' : 'text-white'}>
                    <sfgov-icon symbol='clipboard'></sfgov-icon>
                  </div>
                </div>

                {copied
                  ? (
                  <span className='absolute -bottom-28 bg-slate-4 rounded-4 text-white px-8 py-4'>
                    Copied!
                  </span>
                    )
                  : null}
              </button>
            </CopyToClipboard>
          )}
        </BrowserOnly>
      </div>
    </div>
  )
}

IconSample.propTypes = {
  iconInfo: PropTypes.string.isRequired
}
