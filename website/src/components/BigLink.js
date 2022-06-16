import React from 'react'
import Link from '@docusaurus/Link'
import PropTypes from 'prop-types'

const BigLink = ({ link, label }) => {
  return (
    <Link to={link} className='flex items-center font-regular text-action no-underline hover:text-slate-4 hocus:bg-grey-1' style={{ padding: '8px 12px', width: 'fit-content', borderRadius: '20px' }}>
      <p className='m-0 mr-4'>{label}</p>
      <sfgov-icon symbol='chevron-right'></sfgov-icon>
    </Link>
  )
}

BigLink.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string
}

export default BigLink
