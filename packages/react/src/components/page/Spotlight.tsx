import React from 'react'
import { Button } from '../Button'
import { Container } from '../Container'
import { TitleLg } from '../Text'
import { styled } from '../../stitches.config'

export type SpotlightProps = {
  title: string;
  body: string;
  buttonContent: string;
  image: string;
  isFullWidth?: boolean;
  isTitleFirst?: boolean;
};

const SpotlightContainer = styled(Container, {
  bg: '$greyL1',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 60,
  gap: 12,
  '@md': {
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      width: '50%'
    }
  },
  variants: {
    full: {
      true: {
        '@md': {
          flexWrap: 'wrap',
          '& > *': { width: '100%' },
          '& > img': { maxHeight: '300px' }
        }
      }
    },
    reverse: {
      true: {
        flexDirection: 'column-reverse',
        '@md': {
          flexDirection: 'row-reverse'
        }
      }
    }
  }
})

const SpotlightImage = styled('img', {
  objectFit: 'cover'
})

export const Spotlight = ({
  title,
  body,
  buttonContent,
  image,
  isFullWidth = false,
  isTitleFirst = false
}: SpotlightProps) => (
  <SpotlightContainer full={isFullWidth} reverse={isTitleFirst}>
    <SpotlightImage src={image} />
    <div>
      <TitleLg>{title}</TitleLg>
      <div>{body}</div>
      <Button>{buttonContent}</Button>
    </div>
  </SpotlightContainer>
)
