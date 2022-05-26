import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Design',
    Svg: require('@site/static/img/icon-design.svg').default,
    description: (
      <>
        Something about the what and whys about the SF Design System design decisions.
      </>
    )
  },
  {
    title: 'Components',
    Svg: require('@site/static/img/icon-component.svg').default,
    description: (
      <>
        See how we put foundational elements together into buttons, accordion details, and keyboard instructions.
      </>
    )
  },
  {
    title: 'Content',
    Svg: require('@site/static/img/icon-content.svg').default,
    description: (
      <>
        Something about how to write great content the Digital Services way.
      </>
    )
  },
  {
    title: 'Forms',
    Svg: require('@site/static/img/icon-forms.svg').default,
    description: (
      <>
        Something about writing great forms the Digital Services way.
      </>
    )
  }
]

function Feature ({ Svg, title, description, className, ...rest }) {
  return (
    <div className={clsx(className, 'col col--3')} {...rest}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

Feature.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
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
