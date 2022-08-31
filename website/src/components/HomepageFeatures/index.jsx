import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Feature from './Feature'
import { SvgToken, SvgColor, SvgGrid, SvgComponents, SvgType, SvgTailwind } from './images/'

const FeatureList = [
  {
    section: 'dev',
    title: 'Tailwindcss',
    link: 'develop/css/tailwind',
    description: 'Using Tailwindcss utility classes to style our UI quickly',
    img: SvgTailwind
  },
  {
    section: 'dev',
    title: 'Components',
    link: 'components/buttons',
    description:
      'Quickly build reliable and consistent products by including carefully crafted components',
    img: SvgComponents
  },
  {
    section: 'dev',
    title: 'Tokens',
    link: 'libraries/iconsLibrary',
    description:
      'Implemented with tokens to allow for predictable implementation and maintenance',
    img: SvgToken
  },
  {
    section: 'design',
    title: 'Colors',
    link: 'design/color',
    description:
      'A library of colors to design new, accessible interactions with ease',
    img: SvgColor
  },
  {
    section: 'design',
    title: 'Typography',
    link: 'design/typography',
    description: 'Readability is a first-class consideration for SF DesSys',
    img: SvgType
  },
  {
    section: 'design',
    title: 'Grids',
    link: 'design/layout',
    description:
      'Grid layouts for  beautiful layouts on desktop, tablet, and mobile',
    img: SvgGrid
  }
]

export default function HomepageFeatures () {
  return (
    <>
      <article className={styles.features}>
        <div className='col col--10 col--offset-1'>
          <div className='container pl-0'>
            <h2 className='text-title-lg text-slate-4 dark:text-slate-1 mb-24'>
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

      <article className={clsx(styles.features, 'bg-grey-1 dark:bg-black pb-96 ')}>
        <div className='col col--10 col--offset-1'>
          <div className='container pl-0'>
            <h2 className='text-title-lg text-slate-4 dark:text-slate-1'>Design for everyone</h2>
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
