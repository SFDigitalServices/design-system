import React from 'react'
import tw from 'tailwind-styled-components'

export const TileSection = tw.div`
  grid
  grid-cols-1
  lg:grid-cols-3
  gap-20
  mb-60
`

const TileContainer = tw.div`
  rounded
  flex
  justify-between
  overflow-hidden
  flex-col
  md:flex-row
`

const TextWrapper = tw.div`
  p-20
`

const TileTitle = tw.div`
  font-medium
  mb-20
`

const TileImage = tw.img`
  ${props => props.variant === 'Event' ? 'rounded-t' : 'pl-8 rounded-r w-1/3'}
`

export const NewsTile = ({ title, body, img }) =>
  <TileContainer $as='a' className='text-slate bg-yellow-3 hover:bg-yellow-4'>
    <TextWrapper>
      <TileTitle>{title}</TileTitle>
      <div>{body}</div>
    </TextWrapper>
    {img && <TileImage src={img} style={{ objectFit: 'cover' }} />}
  </TileContainer>

// export const EventTile = ({ title, body }) => {}

export const FeatureTile = ({ title, body }) =>
  <TileContainer $as='a' className='text-white bg-purple-3 hover:bg-purple-4'>
    <TextWrapper>
      <TileTitle>{title}</TileTitle>
      <div>{body}</div>
    </TextWrapper>
  </TileContainer>

export const ContentTile = ({ title, body }) =>
  <TileContainer $as='a' className='text-slate bg-white border-3 border-solid border-grey-2 hover:border-action'>
    <TextWrapper>
      <TileTitle className='text-action underline'>{title}</TileTitle>
      <div>{body}</div>
    </TextWrapper>
  </TileContainer>
