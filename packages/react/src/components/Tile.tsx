import React, { ReactNode } from 'react'
import { Flex } from './Flex'
import { Grid } from './Grid'
import { Icon } from './Icon'
import { SmallText, TitleLg, TitleMd, TitleXs } from './Text'
import { styled } from '../stitches.config'

type TileProps = {
  title: string;
  body: string;
  href: string;
};

interface EventTileProps extends TileProps {
  imgSrc?: string;
  eventType: string;
}

const linkStyles = {
  textDecorationLine: 'none'
}

export const TileSection = styled(Grid, {
  mb: 60,
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  '@md': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
  }
})

const TileContainer = styled(Flex, {
  justifyContent: 'space-between',
  overflow: 'hidden',
  flexDirection: 'column',
  color: '$slateL3',
  textDecorationLine: 'none',
  '@md': {
    flexDirection: 'row'
  }
})

const ContentWrapper = styled('div', {
  p: 20
})

const TileTitle = styled(TitleXs, {
  marginBottom: 20
})

const BaseTile = ({ href, children }) => (
  <TileContainer as="a" href={href}>
    <ContentWrapper>{children}</ContentWrapper>
  </TileContainer>
)

export const NewsTile = ({ title, body, href }: TileProps) => (
  <BaseTile href={href}>
    <TileTitle>{title}</TileTitle>
    <div>{body}</div>
  </BaseTile>
)

export const ContentTile = ({ title, body, href }: TileProps) => (
  <BaseTile href={href}>
    <TileTitle>{title}</TileTitle>
    <div>{body}</div>
    <Icon symbol="arrow-right" />
  </BaseTile>
)

export const QuickLink = ({ title, body, href }: TileProps) => (
  <BaseTile href={href}>
    <Icon symbol="document" />
    <TitleLg css={{ my: 12 }}>{title}</TitleLg>
    <div>{body}</div>
    <Icon symbol="arrow-right" />
  </BaseTile>
)

export const EventTile = ({
  title,
  body,
  href,
  imgSrc,
  eventType
}: EventTileProps) => (
  <BaseTile href={href}>
    {/* <img src={imgSrc ? imgSrc : placeholder} /> */}
    <div>an image will go here</div>
    <Flex>
      <Icon symbol="document" />
      <SmallText>{eventType}</SmallText>
    </Flex>
    <TitleMd css={{ my: 12 }}>{title}</TitleMd>
    <div>{body}</div>
  </BaseTile>
)
