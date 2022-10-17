import React from 'react'
import tw from 'tailwind-styled-components'

const SpotlightSection = tw.div`
  bg-grey-1
  px-20
  py-40
  mb-60
  lg:py-60
  lg:flex
  lg:gap-28
`

const SpotlightContent = tw.div`
  lg:w-1/2
`

// const SpotlightSectionFloating = tw(SpotlightSection)`
//   ${props => props.backgroundColor}
//   rounded
//   px-0
//   py-0
//   lg:py-0
//   lg:gap-0
// `

// const SpotlightContentFloating = tw(SpotlightContent)`
//   ${props => !!props.isTitlePanel && 'text-white py-40 px-20 lg:py-60 lg:px-40'}
//   rounded-b
//   lg:rounded-r
//   lg:rounded-bl-0
// `

export const Primary = () =>
  <SpotlightSection>
    <SpotlightContent className='bg-grey-2'></SpotlightContent>
    <SpotlightContent>
      {/* <Title>This is a spotlight title</Title>
      <BigDescription>This is the spotlight description text</BigDescription>
      <Button>A primary button</Button> */}
    </SpotlightContent>
  </SpotlightSection>

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Spotlight Section'
}
