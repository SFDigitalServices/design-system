import React from 'react'
import BigDescription from '../../src/BigDescription'
import PageTitle from '../../src/PageTitle'
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
    isImageFirst: false,
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
  flex
  flex-col
  lg:flex-row
  bg-grey-1
  px-20
  py-40
  mb-60
  gap-28
  lg:py-60
  ${props => props.$reverse ? 'flex-col-reverse lg:flex-row-reverse' : ''}
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
  gap-0
  lg:py-0
  ${props => props.$reverse ? 'flex-col-reverse lg:flex-row-reverse' : ''}
`

const SpotlightContentFloating = tw(SpotlightContent)`
  ${props => {
    if (props.isInverseTitlePanel) {
      return 'text-white py-40 px-20 lg:py-60 lg:px-40'
    } else if (props.isImageFirst) {
      return 'rounded-t lg:rounded-l lg:rounded-t-0'
    } else {
      return 'rounded-b lg:rounded-r lg:rounded-bl-0'
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
    <PageTitle>{title}</PageTitle>
    <BigDescription>{body}</BigDescription>
    {primary ? <Button>{buttonContent}</Button> : <InverseButton>{buttonContent}</InverseButton>}
  </>

export const Spotlight = ({ title, body, buttonContent, image, primary = true, backgroundColor = '', isImageFirst = false }) => {
  const containerProps = { $reverse: isImageFirst }
  const textProps = {
    title,
    body,
    buttonContent,
    primary
  }
  const imageProps = {
    $as: 'img',
    src: image,
    isImageFirst,
    style: { objectFit: 'cover' }
  }

  let SpotlightContainer = SpotlightSection
  let SpotlightText = SpotlightContent
  let SpotlightImage = SpotlightContent

  if (!primary) {
    SpotlightContainer = SpotlightSectionFloating
    SpotlightText = SpotlightContentFloating
    SpotlightImage = SpotlightContentFloating
    containerProps.backgroundColor = backgroundColor
  }

  return (
    <SpotlightContainer {...containerProps}>
      <SpotlightText isInverseTitlePanel={primary ? '' : 'true'}>
        <Content {...textProps} />
      </SpotlightText>
      <SpotlightImage {...imageProps} />
    </SpotlightContainer>
  )
}
