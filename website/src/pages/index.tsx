import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import SFGovIcon from '../components/SFGovIcon'
import { BigDesc, Box, Button, Container, Flex, TitleLg } from '@sfgov/design-system/react'

export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      // description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

function HomepageHeader () {
  return (
    <Box as='header' css={{ color: '$slateL4', marginTop: 28, textAlign: 'center' }}>
      <Container>
        <TitleLg as='h1'>
          Make digital products with San&nbsp;Francisco!
        </TitleLg>
        <BigDesc css={{ fontWeight: '$light', my: 20 }}>
          The SF.gov design system helps anyone creating digital products
          for San&nbsp;Francisco to ensure the interfaces are accessible,
          consistent, and&nbsp;efficient.
        </BigDesc>
      </Container>
      <Flex css={{ justifyContent: 'center' }}>
        <Button as='a' href='develop/install' css={{ textDecoration: 'none !important' }}>
          <span>Get started</span>
          <SFGovIcon symbol='arrow-right' />
        </Button>
      </Flex>
    </Box>
  )
}
