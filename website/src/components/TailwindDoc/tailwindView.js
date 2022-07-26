import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-css'

import UtilityListItem from '@site/src/components/TailwindDoc/utilityList.js'
import TwSearchBar from '@site/src/components/TailwindDoc/tailwindSearchBar.js'

const TailwindView = ({ json }) => {
  const [tailwindClasses, setTailwindClasses] = useState(json)

  const search = (event) => {
    const text = event.target.value

    const newtailwindClasses = json.map((category) => {
      return {
        ...category,
        content: category.content.map((subcategory) => {
          return {
            ...subcategory,
            table:
              subcategory.title.includes(text) ||
              subcategory.description.includes(text)
                ? subcategory.table
                : subcategory.table.filter((tr) => {
                  let isValid = false
                  tr.forEach((td) => {
                    if (!isValid) {
                      isValid = td.includes(text)
                    }
                  })
                  return isValid
                })
          }
        })
      }
    })
    setTailwindClasses(newtailwindClasses)
  }

  return (
    <>
      <TwSearchBar search={search}/>
      <section className='dark:bg-gray-900'>
        <Masonry
          breakpointCols={{
            default: 2,
            640: 1
          }}
          className='my-masonry-grid flex flex-wrap lg:pt-24'
          columnClassName='my-masonry-grid_column'
        >
          {tailwindClasses.map((collection) => (
            <UtilityListItem key={collection.title} collection={collection}/>
          ))}
        </Masonry>
      </section>
    </>
  )
}

TailwindView.propTypes = {
  tailwindClasses: PropTypes.element,
  json: PropTypes.element
}

export default TailwindView
