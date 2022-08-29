import React from 'react'
import clsx from 'clsx'

const fontWeightSamples = [
  {
    font: 'rubik',
    weightName: 'light',
    weight: '300'
  },
  {
    font: 'rubik',
    weightName: 'regular',
    weight: '400'
  },
  {
    font: 'rubik',
    weightName: 'semibold',
    weight: '600'
  },
  {
    font: 'Roboto mono',
    weightName: 'regular',
    weight: '400'
  }
]

const TypeFontFamiles = () => {
  return (
    <div className={clsx('flex w-full justify-between text-center')}>
      {fontWeightSamples.map((sample, i) => (
        <div key={i} className='w-auto'>
          <p className='text-display-lg-desktop mb-8' style={{ fontWeight: sample.weight, fontFamily: sample.font }}>SF</p>
          <p className='font-medium uppercase mb-0' style={{ textTransform: 'capitalize' }}>{sample.font}</p>
          <p style={{ textTransform: 'capitalize' }}>
            {sample.weightName} ({sample.weight})
          </p>
        </div>
      ))}
    </div>
  )
}

export default TypeFontFamiles
