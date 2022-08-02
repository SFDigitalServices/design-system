import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const StorybookEmbed = ({ className, children }) => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <main className='w-full' style={{ height: '100vh' }}>
        <iframe
          src='https://formio-sfds-pr-231.herokuapp.com/storybook/'
          title='storybook'
          className='w-full border-0 h-full'
        ></iframe>
      </main>
    </Layout>
  )
}

export default StorybookEmbed
