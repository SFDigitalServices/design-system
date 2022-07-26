import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import useBus from 'use-bus'

const UtilityListItem = (props) => {
  const { collection, key } = props

  const hasVisibleContent =
    collection.content.filter((subCollection) => subCollection.table.length)
      .length > 0

  const { content } = collection

  return (
    <article
      className={clsx('flex flex-wrap', !hasVisibleContent && 'hidden')}
      key={key}
    >
      <header id='main-header' className='w-full'>
        <h2 className='text-title-sm mb-8'>{collection.title}</h2>
        <hr className='m-0 mb-12' />
      </header>
      {content.map(
        (subCollection) =>
          subCollection.table.length > 0 && (
            <UtilityItemSection
              subCollection={subCollection}
              key={subCollection.title}
            />
          )
      )}
    </article>
  )
}

UtilityListItem.propTypes = {
  collection: PropTypes.object,
  key: PropTypes.number,
  content: PropTypes.array
}

export default UtilityListItem

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
        <div className='w-full flex items-center'
        onClick={ToggleShow}>
        <h3 className='text-title-xs mb-0'>{subCollection.title}</h3>

        </div>
        <a className='btn btn-inverse no-underline' style={{ marginLeft: 'auto' }} href={subCollection.docs} target='_blank' rel='noreferrer'>
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

const UtilClassRow = ({ rowItem, key }) => {
  const colorMatch =
    /^\B#([a-z0-9]{2,})(?![~!@#$%^&*()=+_`\-|\\/'[\]{}]|[?.,]*\w)$/i

  return (
    <>
      {rowItem.toLowerCase().match(colorMatch) ||
      rowItem.toLowerCase().match(/^transparent/i)
        ? (
        <ColorSample color={rowItem} key={key} />
          )
        : (
        <td
          className='first:text-red-4 first:whitespace-nowrap border-0 font-mono'
          key={key}
        >
          {rowItem}
        </td>
          )}
    </>
  )
}

// Color sample
const ColorSample = ({ color, index }) => {
  return (
    <td className='border-0' key={index}>
      <div
        className={clsx(
          'w-28 h-28 rounded-full border-1 border-black border-solid bg-yellow-50'
        )}
        style={{ backgroundColor: color }}
      />
    </td>
  )
}

// Border color sample
const BorderColor = ({ color }) => {
  return (
    <div className={clsx('w-28 h-28 rounded-full border-4 border-solid')} />
  )
}

// Border width
const BorderWidth = ({ width }) => {
  return (
    <div
      className={clsx(
        'w-28 h-28 rounded border-black border-solid bg-yellow-50',
        width
      )}
    />
  )
}
