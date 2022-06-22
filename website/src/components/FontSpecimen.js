import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const FontSpecimen = ({ styleName, className, children }) => {
  const [sampleFontWeight, setSampleFontWeight] = useState('')
  const [sampleFontSize, setSampleFontSize] = useState('')
  const [sampleFontLH, setsampleFontLH] = useState('')
  const [sampleFontLS, setsampleFontLS] = useState('')
  const sample = useRef('')
  const idName = styleName.split(' ').join('-').toLowerCase()

  useEffect(() => {
    setSampleFontWeight(window.getComputedStyle(sample.current).getPropertyValue('font-weight'))
    setSampleFontSize(window.getComputedStyle(sample.current).getPropertyValue('font-size'))
    setsampleFontLH(window.getComputedStyle(sample.current).getPropertyValue('line-height'))
    setsampleFontLS(window.getComputedStyle(sample.current).getPropertyValue('letter-spacing'))
  }, [sample])

  return (
    <article id={idName} className='flex flex-wrap mb-24'>
      <header className='w-full'>
        <h4 className='mb-8 text-title-xs'>{styleName}</h4>
        <p className='font-mono'>{className}</p>
      </header>
      <div>
        <p ref={sample} className={clsx('', className)}>The quick brown fox jumps over the lazy dog.</p>
      </div>
      <pre className='w-full rounded-4 p-24 mb-24'>
        <code >
          <p className='m-0'>font-weight: {sampleFontWeight}</p>
          <p className='m-0'>font-size: {sampleFontSize}</p>
          <p className='m-0'>line-height: {sampleFontLH}</p>
          <p className='m-0'>letter-spacing: {sampleFontLS}</p>
        </code>
      </pre>
      <p className='m-0'>
        {children}
      </p>
      <hr className='w-full bg-grey-2' />
    </article>
  )
}

FontSpecimen.propTypes = {
  styleName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element
}

export default FontSpecimen
