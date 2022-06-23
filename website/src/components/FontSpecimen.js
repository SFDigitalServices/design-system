import React, { useRef, useEffect, useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
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
      <CodeBlock language='css' className='w-full p-8 mb-24'>

          {`font-weight: ${sampleFontWeight}
          font-size: ${sampleFontSize}
          line-height: ${sampleFontLH}
          letter-spacing: ${sampleFontLS}`}

        </CodeBlock>

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
  children: PropTypes.string
}

export default FontSpecimen
