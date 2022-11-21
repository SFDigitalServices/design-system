import React, { useState, useEffect } from 'react'
import SFGovIcon from '../SFGovIcon'
import FigmaLogo from './img/figma_logo'
import StorybookLogo from './img/storybook_logo'
import IconExternalLink from '@theme/Icon/ExternalLink'

// https://design-system.sf.gov/storybook/iframe.html?args=&id=components-buttons--primary-button&viewMode=story

// https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3647%3A1504&t=Rvw9KsvFxlstnv3g-4

const FileEmbed = ({ embedURL }) => {
  const [hoverState, updateHoverState] = useState(false)
  const [linkType, updateLinkType] = useState(false)

  const figmaRegex = /https:\/\/([\w\.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/

  const storybookRegex = /story/i

  const checkLink = (embedURL) => {
    if (figmaRegex.test(embedURL)) {
      updateLinkType('figma')
    } else if (storybookRegex.test(embedURL)) {
      updateLinkType('storybook')
    } else {
      updateLinkType(null)
    }
  }

  useEffect(() => {
    checkLink(embedURL)
  }, [])

  const whichServiceIcon = () => {
    if (linkType === 'storybook') {
      return <StorybookLogo />
    } else if (linkType === 'figma') {
      return <FigmaLogo />
    } else {
      return <IconExternalLink />
    }
  }

  const whichServiceLabel = () => {
    if (linkType === 'storybook') {
      return 'Storybook'
    } else if (linkType === 'figma') {
      return 'Figma'
    } else {
      return 'External link'
    }
  }

  const hoverStyle = {
    backgroundImage: hoverState && 'linear-gradient(0deg, #f2f2f2, transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    alignSelf: 'end'
  }

  const mouseEnter = () => {
    updateHoverState(true)
  }
  const mouseLeave = () => {
    updateHoverState(false)
  }

  // Figma requires a prepended url for embeds
  return (
    <div className='flex w-full overflow-hidden flex-wrap border-1 rounded border-grey-2 border-solid mb-24' style={{ height: '275px' }}>
      <div className='w-full overflow-hidden' style={{ height: 'calc(100% - 48px)' }}>
        {linkType === 'figma'
          ? <iframe src={'https://www.figma.com/embed?embed_host=share&url=' + embedURL} className='w-full aspect-video' style={{ height: 'calc(100% + 48px)' }} border='0'/>
          : <iframe src={embedURL} className='w-full aspect-video' style={{ height: 'calc(100% + 48px)' }} border='0'/>
        }
      </div>
      <a
        className='flex w-full px-12 items-center text-grey-dark h-48 transition-all'
        href={embedURL}
        target='_blank'
        style={ hoverStyle }
        onMouseEnter={() => mouseEnter(true)}
        onMouseLeave={() => mouseLeave(false)} rel='noreferrer'
      >
        <div className='w-20 h-20'>
          { whichServiceIcon() }
        </div>
        {hoverState && (
          <div className='ml-4 items-center flex w-full '>
            <span className='mr-8'>
            { whichServiceLabel() }
            </span>
            <SFGovIcon symbol='chevron-right' />
          </div>
        )}
      </a>
    </div>
  )
}

export default FileEmbed
