import React, { useState } from 'react'
import clsx from 'clsx'
import useBus from 'use-bus'

import UtilClassRow from './utilClassRow'

const UtilityItemSection = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { subCollection } = props

  const ToggleShow = () => {
    setIsOpen(!isOpen)
  }

  useBus('@@ui/show', () => setIsOpen(true))

  useBus('@@ui/hide', () => setIsOpen(false))

  return (
    <div
      id='class-section'
      className={clsx(
        'w-full flex flex-wrap mb-20 pb-12',
        isOpen && 'bg-grey-1'
      )}
    >
      <div
        id='section-header'
        className='w-full flex items-center py-8 px-12 hover:cursor-pointer hover:bg-grey-1'
      >
        <div className='w-full flex items-center' onClick={ToggleShow}>
          <h3 className='text-title-xs mb-0'>{subCollection.title}</h3>
        </div>
        <a
          className='btn btn-inverse no-underline'
          style={{ marginLeft: 'auto' }}
          href={subCollection.docs}
          target='_blank'
          rel='noreferrer'
        >
          Docs
        </a>
      </div>
      <div className={clsx('section-reveal mx-12 w-full', !isOpen && 'hidden')}>
        <p>{subCollection.description}</p>
        <table
          id='rows'
          className='border-1 border-grey-2 border-solid rounded p-8 w-full flex flex-wrap table-auto'
        >
          {/* Add table header, border sample, text color sample, border width sample, spacing sample */}
          <tbody className='w-full'>
            {subCollection.table.map((subItem, index) => (
              <tr id='row' key={index} className='w-full border-0 even:bg-none'>
                {subItem.map((subEntry, index) => (
                  <UtilClassRow rowItem={subEntry} key={index} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UtilityItemSection
