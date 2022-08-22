import React from 'react'

const SvgGrid = ({ hover }) => {
  return (
    <svg
      width='100px'
      height='100px'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ filter: hover && 'grayscale(1) brightness(0.0) invert(1)' }}
    >
      <path
        d='M10.821.815h8.847v100h-8.847v-100zm13.903 0h8.846v100h-8.846v-100zm13.902 0h8.846v100h-8.846v-100zm13.902 0h8.847v100h-8.847v-100zm13.902 0h8.847v100H66.43v-100zm13.902 0h8.847v100h-8.847v-100z'
        fill='#EFCABB'
      />
    </svg>
  )
}

export default SvgGrid
