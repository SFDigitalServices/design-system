import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function LibraryRow ({ className, children }) {
  return (
    <div className={clsx('flex flex-wrap gap-40', className)}>
       {children}
     </div>
  )
}

LibraryRow.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
}
