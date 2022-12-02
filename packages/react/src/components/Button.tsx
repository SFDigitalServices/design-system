import React from 'react'
import { styled, CSS } from '../stitches.config'
import { HOCUS_SELECTOR } from '../constants'

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'link'

export const baseButtonStyles: CSS = {
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
  borderWidth: '3px',
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

export const primaryButtonStyles: CSS = {
  color: '$white',
  backgroundColor: '$action',
  [HOCUS_SELECTOR]: {
    backgroundColor: '$blueDark'
  }
}

export const inverseButtonStyles: CSS = {
  color: '$action',
  backgroundColor: '$white',
  [HOCUS_SELECTOR]: {
    color: '$blueDark'
  }
}

export const secondaryButtonStyles: CSS = {
  ...inverseButtonStyles,
  borderColor: 'currentcolor'
}

export const linkButtonStyles: CSS = {
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

Button.className = 'Button'

export type ButtonProps = React.ComponentPropsWithRef<typeof Button>

export const PrimaryButton = extractVariant('primary')
export const SecondaryButton = extractVariant('secondary')
export const InverseButton = extractVariant('inverse')
export const LinkButton = extractVariant('link')

function extractVariant (variant: ButtonVariant) {
  return function ButtonVariant (props: Omit<ButtonProps, 'variant'>) {
    return <Button variant={variant} {...props} />
  }
}
