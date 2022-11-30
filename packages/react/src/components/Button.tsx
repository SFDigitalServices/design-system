import clsx, { ClassValue } from 'clsx'
import React, { ComponentType } from 'react'
import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps, ThemeUIStyleObject } from 'theme-ui'
import { FOCUS, HOCUS, SIMULATED_HOCUS_CLASS } from '../constants'
import { withStyles } from '../utils'
import { focusStyles } from '../styles'

export type ButtonProps = ThemeUIButtonProps & {
  className?: string | ClassValue
  $block?: boolean
  __simulatedHocus?: boolean
}

const baseButtonStyles: ThemeUIStyleObject = {
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
  fontFamily: 'body',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  [FOCUS]: focusStyles
}

const blockProps: ThemeUIStyleObject = {
  display: 'flex',
  width: '100%'
}

function BaseButton ({ $block, __simulatedHocus, sx, className, ...rest }: ButtonProps) {
  return <ThemeUIButton {...rest} sx={{
    ...baseButtonStyles,
    ...($block ? blockProps : null),
    ...sx
  }} className={__simulatedHocus ? clsx(className, SIMULATED_HOCUS_CLASS) : className} />
}

export const PrimaryButton = withStyles(BaseButton, {
  color: 'white',
  backgroundColor: 'action',
  [HOCUS]: {
    backgroundColor: 'blue.dark'
  }
})

export const InverseButton = withStyles(BaseButton, {
  color: 'action',
  backgroundColor: 'white',
  [HOCUS]: {
    color: 'blue.dark'
  }
})

export const SecondaryButton = withStyles(InverseButton, {
  borderColor: 'currentcolor'
})

export const LinkButton = withStyles(InverseButton, {
  backgroundColor: 'transparent',
  textDecoration: 'underline'
})

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'link'

export type GenericButtonProps = ButtonProps & {
  variant?: ButtonVariant
}

const variantMap: Record<ButtonVariant, ComponentType<ButtonProps>> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  inverse: InverseButton,
  link: LinkButton
}

export function Button ({ variant, ...props }: GenericButtonProps) {
  const Component = variantMap[variant] || PrimaryButton
  return <Component {...props} />
}