import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    title: 'Design',
    link: 'design/color',
    description: 'Something about the what and whys about the SF Design System design decisions.'
  },
  {
    title: 'Components',
    link: 'components/buttons',
    description: 'See how we put foundational elements together into buttons, accordion details, and keyboard instructions.'
  },
  {
    title: 'Develop',
    link: 'develop/css',
    description: 'Something about how to write great content the Digital Services way.'
  },
  {
    title: 'Libraries',
    link: 'libraries/colorMapsChartsLibrary',
    description: 'Something about writing great forms the Digital Services way.'
  }
]

function Feature ({ title, link, description, className, ...rest }) {
  return (
    <Link to={`/docs/${link}`} className={clsx(className, 'col col--6 no-underline px-20 py-16 rounded-4 hover:bg-grey-1')} {...rest}>
      <div className='padding-horiz--md'>
        <h3 className='title-lg font-medium font-rubik'>{title}</h3>
        <p className='font-rubik text-slate-3'>{description}</p>
      </div>
    </Link>
  )
}

Feature.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  Svg: PropTypes.elementType
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
