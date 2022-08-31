import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

export default function FooterLayout ({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer flex flex-wrap lg:flex-nowrap footer--dark responsive-grid px-20 lg:px-40 xl:px-100', {
        'footer--dark': style === 'dark'
      })}
    >
      <Link to='http://sf.gov' className='w-full xl:w-1/2 flex items-center hover:opacity-60 col-span-4 hover:no-underline'>
          {logo && <div className='margin-bottom--sm'>{logo}</div>}
          <div className='title-md font-light ml-20 text-white'>
            City and County
            <br />
            of San Francisco
          </div>
      </Link>

      <div className='w-full lg:w-1/2 order-1'>
        {links}
        {copyright && (
          <div className='footer__bottom text--center'>{copyright}</div>
        )}
      </div>
    </footer>
  )
}
