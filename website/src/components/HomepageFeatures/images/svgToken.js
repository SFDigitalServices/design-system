import React from 'react'

const SvgToken = ({ hover }) => {
  return (
    <svg
      width='100px'
      height='100px'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ filter: hover && 'grayscale(1) brightness(0.0) invert(1)' }}
    >
      <circle cx={50} cy={50} r={48} stroke='#1D4D70' strokeWidth={4} />
      <circle cx={50} cy={50} r={32.001} stroke='#1D4D70' strokeWidth={4} />
      <circle cx={50} cy={50} r={23.06} fill='#1D4D70' />
    </svg>
  )
}

export default SvgToken
