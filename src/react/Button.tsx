import { classed, classes } from './utils'
import type { ComponentProps } from 'react'

export const BUTTON_VARIANTS = {
  base: classes(
    'items-center',
    'justify-center',
    'shrink-0',
    'rounded-4', // FIXME: need 8px in theme.radii
    'gap-8',
    'px-16',
    'py-[15px]',
    'border-[transparent]', // FIXME: need transparent in theme.colors
    'border-solid',
    'border-1',
    '!cursor-pointer',
    'font-medium',
    '!text-label-xs',
    'text-center',
    'no-underline',
    'whitespace-nowrap',
    'w-fit',
    'disabled:text-neutral300',
    'disabled:bg-neutral100',
    'disabled:!cursor-not-allowed'
  ),
  variants: {
    variant: {
      large: classes(
        'text-body',
        'h-[52px]',
        'text-white',
        'bg-primary500',
        'hover:bg-primary800',
        'hover:border-primary800',
        'hover:text-white',
        'focus:bg-primary800',
        'focus:border-primary800',
        'focus:text-white'
      ),
      primary: classes(
        'text-white',
        'bg-primary500',
        'hover:bg-primary800',
        'hover:border-primary800',
        'focus:bg-primary800',
        'focus:border-primary800',
        'disabled:border-neutral100'
      ),
      secondary: classes(`
        text-primary700
        bg-primary100
        hover:text-primary900 hover:!bg-primary200 
        hover:border-primary200
        focus:text-primary900 focus:!bg-primary200 
        focus:border-primary200
        disabled:border-neutral100 disabled:!bg-neutral100
      `),
      tertiary: classes(
        'border-primary500',
        'text-primary500',
        'bg-white',
        'hover:bg-primary100',
        'hover:border-primary700',
        'hover:text-primary700',
        'focus:bg-primary100',
        'focus:border-primary700',
        'focus:text-primary700',
        'disabled:!bg-[transparent]'
      ),
      link: classes(
        '!p-8',
        '!font-bold',
        'text-body',
        '!bg-[transparent]', // FIXME: need transparent in theme.colors,
        '!underline',
        '!inline-flex',
        'text-primary600',
        'hover:!text-primary700'
      )
    },
    block: {
      true: classes('flex w-full'),
      false: classes('inline-flex')
    }
  },
  defaultVariants: {
    variant: 'primary',
    block: false
  }
} as const

export const Button = classed('button', BUTTON_VARIANTS)

export type ButtonProps = ComponentProps<typeof Button>
