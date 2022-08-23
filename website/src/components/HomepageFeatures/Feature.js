import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Feature = (props) => {
  const [isHover, setIsHover] = useState(false)
  const linkStyle = 'col col--4 flex flex-wrap w-full items-center no-underline p-24 rounded-4 hocus:bg-action group'

  const { section, title, link, description, img: Img, altImg, className, ...rest } = props

  return (
    <a href={`/${link}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={clsx(className, linkStyle)} {...rest}>
      <div className='w-full flex justify-center mb-24 '>
      <Img hover={isHover}/>
      </div>
      <div className='flex flex-wrap w-full' style={{ height: 'fit-content' }}>
        <h3 className='text-title-md font-rubik text-slate-4 dark:text-slate-1 group-hocus:text-white w-full'>
          {title}
        </h3>
        {description !== '' && (
          <p className='font-rubik text-slate-3 dark:text-grey-2 w-full group-hocus:text-white '>
            {description}
          </p>
        )}
      </div>
      <div className='w-full text-right text-action group-hocus:text-white'>
        <sfgov-icon symbol='arrow-right' aria-hidden='true' role='img' />
      </div>
    </a>
  )
}

Feature.propTypes = {
  section: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.func,
  altImg: PropTypes.string,
  Svg: PropTypes.elementType
}

export default Feature
