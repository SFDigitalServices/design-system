import React from 'react'
import tw from 'tailwind-styled-components'

const ResponsiveContainer = tw.div`
  responsive-container
`

const LanguageBar = tw.div`
  bg-grey-1
  py-12
  text-small
`
const LanguageBarLink = tw.a`
  text-slate
  no-underline
  ${props => props.active ? 'font-medium cursor-default' : 'hover:underline'}
`

const SFGovHeader = tw.header`
  my-60
`

export const Header = () =>
  <div>
    <LanguageBar>
      <ResponsiveContainer className='flex justify-end gap-x-28'>
        <LanguageBarLink href='/' active>English</LanguageBarLink>
        <LanguageBarLink href='/es'>Español</LanguageBarLink>
        <LanguageBarLink href='/zh-hant'>中文</LanguageBarLink>
        <LanguageBarLink href='/fil'>Filipino</LanguageBarLink>
      </ResponsiveContainer>
    </LanguageBar>

    <SFGovHeader>
      <ResponsiveContainer className='flex items-center justify-between'>
        <div className='flex items-center gap-x-16'>
          <img src='https://sf.gov/themes/custom/sfgovpl/logo.svg' className='w-60 h-60' />
          <img src='https://sf.gov/themes/custom/sfgovpl/src/img/sfgov.svg' />
        </div>
        <div className='flex items-center justify-end gap-x-20'>
          <nav className='font-medium flex align-center gap-x-20'>
            <a href='/services' className='no-underline'>Services</a>
            <a href='/departments' className='no-underline'>Departments</a>
          </nav>
          <form id='search' className='flex'>
            <input type='text' className='border-3 border-solid border-action rounded px-12 py-8 border-r-0 rounded-r-0' placeholder='Search' />
            <button type='submit' className='btn hover:bg-action px-12 border-l-0 rounded-l-0'>
              <sfgov-icon symbol='search' aria-label='Search'></sfgov-icon>
            </button>
          </form>
        </div>
      </ResponsiveContainer>
    </SFGovHeader>
  </div>

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Header',
  component: Header
}
