import React from 'react'

const SvgTailwind = ({ hover }) => {
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
        d='M50 20c-13.333 0-21.667 6.667-25 20 5-6.667 10.833-9.167 17.5-7.5 3.804.95 6.522 3.711 9.532 6.765C56.933 44.24 62.606 50 75 50c13.333 0 21.667-6.667 25-20-5 6.667-10.833 9.167-17.5 7.5-3.804-.95-6.522-3.711-9.531-6.765C68.067 25.76 62.393 20 50 20zM25 50C11.667 50 3.333 56.667 0 70c5-6.667 10.833-9.167 17.5-7.5 3.804.952 6.522 3.711 9.532 6.765C31.933 74.24 37.606 80 50 80c13.333 0 21.667-6.667 25-20-5 6.667-10.833 9.167-17.5 7.5-3.804-.95-6.522-3.711-9.532-6.765C43.067 55.76 37.394 50 25 50z'
        fill='#38BDF8'
      />
    </svg>
  )
}

export default SvgTailwind
