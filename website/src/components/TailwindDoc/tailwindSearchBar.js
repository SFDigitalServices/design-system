import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const twSearchBar = (props) => {
  const searchString = useRef(null)

  return (
    <div className='flex w-full lg:w-1/2 xl:w-1/4 xl:max-w-sm'>
      <div className='absolute h-48 flex pl-12 text-slate-3'>
        <sfgov-icon symbol='search' />
      </div>
      <input
        className='rounded bg-slate-1 h-48 w-full px-40 border-2 border-solid border-slate-1 focus:bg-white hocus:border-slate-3'
        ref={searchString}
        onChange={props.search}
      />
    </div>
  )
}

twSearchBar.propTypes = {
  searchString: PropTypes.string
}

export default twSearchBar
