import React from 'react'
import { Button, ButtonProps, ThemeUIStyleObject } from 'theme-ui'
import { HOCUS } from '../constants'
import { withStyles } from '../utils'

export type BlockButtonProps = ButtonProps & {
  $block?: boolean
}

const baseButtonStyles: ThemeUIStyleObject = {
  // layout
  display: 'inline-flex',
  alignItems: 'center',
  justifyItems: 'center',
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
  whiteSpace: 'nowrap'
}

const blockProps: ThemeUIStyleObject = {
  display: 'flex',
  width: '100%'
}

function BaseButton ({ $block, sx, ...rest }: BlockButtonProps) {
  return <Button {...rest} sx={{
    ...baseButtonStyles,
    ...($block ? blockProps : null),
    ...sx
  }} />
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

export const LinkButton = withStyles(PrimaryButton, {
  backgroundColor: 'transparent',
  textDecoration: 'underline'
})
