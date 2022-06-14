import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
const { landingDesc } = require('../../constants')

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero')}>
      <div className='container'>
        {/* <h1 className='title-xl font-medium font-rubik'>{siteConfig.title}</h1> */}
        <h1 className='title-xl font-medium font-rubik'>
        <span className='title-lg font-medium font-rubik'>
          San Francisco
        </span>
        <br />
        <span className='title-xl font-medium font-rubik' style={{ textTransform: 'uppercase' }}>
          Design System
        </span>
        </h1>
        <p className='hero__subtitle font-rubik text-big-desc col col--10 px-0'>{landingDesc}</p>
      </div>
    </header>
  )
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
