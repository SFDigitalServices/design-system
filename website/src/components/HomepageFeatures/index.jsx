import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    title: 'Getting Started',
    link: 'develop/install',
    description: 'Start here if you\'re looking to implement the SF Design System for your project or are just setting up your local instance.',
    img: 'img-landing-get.png'
  },
  {
    title: 'Colors',
    link: 'design/color',
    description: '',
    img: 'img-landing-color.png'
  },
  {
    title: 'Typography',
    link: 'design/typography',
    description: '',
    img: 'img-landing-type.png'
  },
  {
    title: 'Grids',
    link: 'design/layout',
    description: '',
    img: 'img-landing-grid.png'
  }
]

function Feature ({ title, link, description, img, className, ...rest }) {
  return (
    <Link to={`/${link}`} className={clsx(className, 'col col--6 flex w-full items-center no-underline px-20 py-16 rounded-4 hover:bg-grey-1')} {...rest}>
      <img style={{ width: '158px' }} src={require(`@site/static/img/${img}`).default} />
      <div className='padding-horiz--md flex flex-wrap' style={{ height: 'fit-content' }}>
        <h3 className='title-lg font-medium font-rubik text-slate-4 w-full'>{title}</h3>
        {description !== '' &&

        <p className='font-rubik text-slate-3 w-full'>{description}</p>
        }
      </div>
    </Link>
  )
}

Feature.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  Svg: PropTypes.elementType
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container lg:pl-20 pl-0'>
          <h2 className='text-title-md text-slate-4 lg:ml-16 ml-0'>Highlights</h2>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
