import React from 'react'
import Link from '@docusaurus/Link'
import PropTypes from 'prop-types'
import SFGovIcon from './SFGovIcon'

const BigLink = ({ children, ...rest }) => {
  return (
    <Link className='flex items-center font-regular text-action no-underline hover:text-slate-4 hocus:bg-grey-1 px-12 py-8' style={{ width: 'fit-content', borderRadius: '20px' }} {...rest}>
      <p className='m-0 mr-4'>{children}</p>
      <SFGovIcon symbol='chevron-right' />
    </Link>
  )
}

BigLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element
}

export default BigLink
