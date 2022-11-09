import React from 'react'
import BigDescription from '../../src/BigDescription'
import Title from '../../src/Title'
import tw from 'tailwind-styled-components'

const imgSrc = 'https://sf.gov/sites/default/files/styles/default/public/2021-10/san-francisco-street-day-time.jpg?itok=5QqBW-AZ'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Spotlight',
  args: {
    title: 'Generic Department',
    body: 'This is a made up department that informs you about the cultivation of generic departments.',
    buttonContent: 'This is a button',
    image: imgSrc,
    primary: true,
    isTitleFirst: false,
    backgroundColor: ''
  },
  argTypes: {
    backgroundColor: {
      name: 'background color (non-primary)',
      type: 'color',
      options: ['bg-purple-3'],
      control: {
        labels: {
          'bg-purple-3': 'Purple'
        }
      }
    }
  },
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
    // }
  }
}

const SpotlightSection = tw.div`
  bg-grey-1
  px-20
  py-40
  mb-60
  space-y-28
  lg:py-60
  lg:flex
  lg:gap-28
`

const SpotlightContent = tw.div`
  w-1/1
  lg:w-1/2
`

const SpotlightSectionFloating = tw(SpotlightSection)`
  ${props => props.backgroundColor}
  rounded
  px-0
  py-0
  space-y-0
  lg:py-0
  lg:gap-0
`

const SpotlightContentFloating = tw(SpotlightContent)`
  ${props => {
    if (props.isInverseTitlePanel) {
      return 'text-white py-40 px-20 lg:py-60 lg:px-40'
    } else if (props.isTitleFirst) {
      return 'rounded-b lg:rounded-r lg:rounded-bl-0'
    } else {
      return 'rounded-t lg:rounded-l lg:rounded-t-0'
    }
  }}
`

const Button = tw.button`
  btn
`

const InverseButton = tw(Button)`
  btn-inverse
`

const Content = ({ title, body, buttonContent, primary = true }) =>
  <>
    <Title>{title}</Title>
    <BigDescription>{body}</BigDescription>
    {primary ? <Button>{buttonContent}</Button> : <InverseButton>{buttonContent}</InverseButton>}
  </>

export const Spotlight = ({ title, body, buttonContent, image, primary = true, backgroundColor = '', isTitleFirst = false }) => {
  const sectionProps = {}
  const contentProps = { style: { objectFit: 'cover' } }

  let SectionComponent = SpotlightSection
  let ContentComponent = SpotlightContent

  if (!primary) {
    SectionComponent = SpotlightSectionFloating
    ContentComponent = SpotlightContentFloating
    sectionProps.backgroundColor = backgroundColor
  }

  return (
    <SectionComponent {...sectionProps}>
      {isTitleFirst
        ? <>
          <ContentComponent isInverseTitlePanel={primary ? '' : 'true'}>
            <Content title={title} body={body} buttonContent={buttonContent} primary={primary} />
          </ContentComponent>
          <ContentComponent $as='img' src={image} isTitleFirst={isTitleFirst} {...contentProps} />
        </>
        : <>
          <ContentComponent $as='img' src={image} isTitleFirst={isTitleFirst} {...contentProps} />
          <ContentComponent isInverseTitlePanel={primary ? '' : 'true'}>
            <Content title={title} body={body} buttonContent={buttonContent} primary={primary} />
          </ContentComponent>
        </>
      }
    </SectionComponent>
  )
}
