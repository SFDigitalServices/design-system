import React from 'react'

const SvgComponents = ({ hover }) => {
  return (
    <svg
      width='100px'
      height='100px'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ filter: hover && 'grayscale(1) brightness(0.0) invert(1)' }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M37.5 0H0v100h100V62.5H37.5V0z'
        fill='#F9E3A3'
      />
      <circle cx={73.863} cy={26.136} r={26.136} fill='#F4C435' />
    </svg>
  )
}

export default SvgComponents
