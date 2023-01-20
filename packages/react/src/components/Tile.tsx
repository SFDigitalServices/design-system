import React, { ReactNode } from 'react'
import { Flex } from './Flex'
import { Grid } from './Grid'
import { SmallText, TitleLg, TitleMd, TitleXs } from './Text'
import { styled } from '../stitches.config'
import { IconArrowRight, IconCalendar, IconDocument } from '../icons'

type TileProps = {
  title: string;
  body: string;
  href: string;
};

interface EventTileProps extends TileProps {
  imgSrc?: string;
  eventType: string;
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
  color: '$colorBaseSlate300',
  textDecorationLine: 'none',
  '@md': {
    flexDirection: 'row'
  }
})

const ContentWrapper = styled('div', {
  p: 20
})

const TileTitle = styled(TitleXs, {
  mb: 20
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
    <IconArrowRight />
  </BaseTile>
)

export const QuickLink = ({ title, body, href }: TileProps) => (
  <BaseTile href={href}>
    <IconDocument />
    <TitleLg css={{ my: 12 }}>{title}</TitleLg>
    <div>{body}</div>
    <IconArrowRight />
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
      <IconCalendar />
      <SmallText>{eventType}</SmallText>
    </Flex>
    <TitleMd css={{ my: 12 }}>{title}</TitleMd>
    <div>{body}</div>
  </BaseTile>
)
