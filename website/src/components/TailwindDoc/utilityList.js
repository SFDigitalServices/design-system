import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import UtilityItemSection from './utilityListItem'

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
