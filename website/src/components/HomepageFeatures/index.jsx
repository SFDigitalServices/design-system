import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    section: 'dev',
    title: 'Tailwindcss',
    link: 'develop/install',
    description: 'Using Tailwindcss utility classes to style our UI quickly',
    img: 'img-landing-tailwind.png',
    altImg: 'img-landing-tailwind-hover.png'
  },
  {
    section: 'dev',
    title: 'Components',
    link: 'design/color',
    description:
      'Quickly build reliable and consistent products by including carefully crafted components',
    img: 'img-landing-components.png',
    altImg: 'img-landing-components-hover.png'
  },
  {
    section: 'dev',
    title: 'Tokens',
    link: 'design/typography',
    description:
      'Implemented with tokens to allow for predictable implementation and maintenance',
    img: 'img-landing-tokens.png',
    altImg: 'img-landing-tokens-hover.png'
  },
  {
    section: 'design',
    title: 'Colors',
    link: 'design/layout',
    description:
      'A library of colors to design new, accessible interactions with ease',
    img: 'img-landing-color.png',
    altImg: 'img-landing-color-hover.png'
  },
  {
    section: 'design',
    title: 'Typography',
    link: 'design/layout',
    description: 'Readability is a first-class consideration for SF DesSys',
    img: 'img-landing-type.png',
    altImg: 'img-landing-type-hover.png'
  },
  {
    section: 'design',
    title: 'Grids',
    link: 'design/layout',
    description:
      'Grid layouts for  beautiful layouts on desktop, tablet, and mobile',
    img: 'img-landing-grid.png',
    altImg: 'img-landing-grid-hover.png'
  }
]

function Feature ({
  section,
  title,
  link,
  description,
  img,
  altImg,
  className,
  ...rest
}) {
  return (
    <Link
      to={`/${link}`}
      className={clsx(
        className,
        'col col--4 flex flex-wrap w-full items-center no-underline px-20 py-16 rounded-4 hocus:bg-action group'
      )}
      {...rest}
    >
      <div className='w-full flex justify-center mb-24 '>
        <img
          style={{ width: '100px' }}
          src={require(`@site/static/img/${img}`).default}
          className='group-hocus:hidden'
          aria-hidden='true'
          role='img'
        />
        <img
          style={{ width: '100px' }}
          src={require(`@site/static/img/${altImg}`).default}
          className='hidden group-hocus:block'
          aria-hidden='true'
          role='img'
        />
      </div>
      <div className='flex flex-wrap w-full' style={{ height: 'fit-content' }}>
        <h3 className='text-title-md font-rubik text-slate-4 group-hocus:text-white w-full'>
          {title}
        </h3>
        {description !== '' && (
          <p className='font-rubik text-slate-3 w-full group-hocus:text-white '>
            {description}
          </p>
        )}
      </div>
      <div className='w-full text-right text-action group-hocus:text-white'>
        <sfgov-icon symbol='arrow-right' aria-hidden='true' role='img' />
      </div>
    </Link>
  )
}

Feature.propTypes = {
  section: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  altImg: PropTypes.string,
  Svg: PropTypes.elementType
}

export default function HomepageFeatures () {
  return (
    <>
      <article className={styles.features}>
        <div className='col col--10 col--offset-1'>
          <div className='container pl-0'>
            <h2 className='text-title-lg text-slate-4 mb-24'>
              Smarter development for our City
            </h2>
            <div className='row'>
              {FeatureList.map(
                (props, idx) =>
                  props.section === 'dev' && <Feature key={idx} {...props} />
              )}
            </div>
          </div>
        </div>
      </article>

      <article className={clsx(styles.features, 'bg-grey-1 pb-96 ')}>
        <div className='col col--10 col--offset-1'>
          <div className='container pl-0'>
            <h2 className='text-title-lg text-slate-4'>Design for everyone</h2>
            <div className='row'>
              {FeatureList.map(
                (props, idx) =>
                  props.section === 'design' && <Feature key={idx} {...props} />
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
