import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
const { landingDesc } = require('../../constants')

function HomepageHeader () {
  return (
    <header className={clsx('hero mt-28 text-center flex-wrap')}>
      <div className='container w-full lg:w-3/4 max-w-lg '>
        <h1 className='title-xl font-medium font-rubik'>
          Make digital products with San&nbsp;Francisco!
        </h1>
        <p className='hero__subtitle font-rubik text-big-desc px-0'>
          {landingDesc}
        </p>
      </div>
      <div className='w-full flex justify-center'>
        <a href='#' className='btn flex gap-8 no-underline max-w-max hocus:text-white'>
          <span>Get started</span>
          <sfgov-icon symbol='arrow-right'></sfgov-icon>
        </a>
      </div>
    </header>
  )
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
