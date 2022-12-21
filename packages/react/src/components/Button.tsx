import React from 'react'
import { VariantProps } from '@stitches/react'
import { styled, CSS } from '../stitches.config'
import { HOCUS_SELECTOR } from '../constants'
import { withFixedProps } from '../utils'

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'link'

const baseButtonStyles: CSS = {
  // layout
  display: 'inline-flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  px: 20,
  py: 8,
  // border
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderWidth: 3,
  // cursor
  cursor: 'pointer',
  // typography
  fontFamily: '$body',
  fontSize: '$body',
  lineHeight: '$body',
  fontWeight: '$bold',
  textAlign: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
}

const primaryButtonStyles: CSS = {
  color: '$white',
  backgroundColor: '$action',
  [HOCUS_SELECTOR]: {
    backgroundColor: '$blueDark'
  }
}

const inverseButtonStyles: CSS = {
  color: '$action',
  backgroundColor: '$white',
  [HOCUS_SELECTOR]: {
    color: '$blueDark'
  }
}

const secondaryButtonStyles: CSS = {
  ...inverseButtonStyles,
  borderColor: 'currentcolor'
}

const linkButtonStyles: CSS = {
  ...inverseButtonStyles,
  backgroundColor: 'transparent',
  textDecoration: 'underline'
}

export const Button = styled('button', {
  ...baseButtonStyles,
  variants: {
    variant: {
      primary: primaryButtonStyles,
      secondary: secondaryButtonStyles,
      inverse: inverseButtonStyles,
      link: linkButtonStyles
    },
    block: {
      true: {
        display: 'flex',
        width: '100%'
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export type ButtonProps = VariantProps<typeof Button>

export const PrimaryButton = createVariant('primary')
export const SecondaryButton = createVariant('secondary')
export const InverseButton = createVariant('inverse')
export const LinkButton = createVariant('link')

function createVariant (variant: ButtonVariant) {
  return withFixedProps(Button, { variant })
}
