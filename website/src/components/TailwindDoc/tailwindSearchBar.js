import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { dispatch } from 'use-bus'
import SFGovIcon from '../SFGovIcon'

const twSearchBar = (props) => {
  const searchString = useRef(null)

  return (
    <div className='flex w-full justify-between mb-12'>
      <div className='lg:w-1/2 xl:w-1/4 xl:max-w-sm'>
        <div className='absolute h-40 flex pl-12 text-slate-3'>
          <SFGovIcon symbol='search' />
        </div>
        <input
          className='rounded bg-slate-1 h-40 w-full px-40 border-2 border-solid border-slate-1 focus:bg-white hocus:border-slate-3 dark:text-black'
          ref={searchString}
          onChange={props.search}
        />
      </div>
      <div>
        <button
          className={clsx('btn mr-12')}
          onClick={() => dispatch('@@ui/show')}
        >
          Expand all
        </button>
        <button className={clsx('btn')} onClick={() => dispatch('@@ui/hide')}>
          Collapse all
        </button>
      </div>
    </div>
  )
}

twSearchBar.propTypes = {
  searchString: PropTypes.string
}

export default twSearchBar
