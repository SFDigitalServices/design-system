import { IconInfo, IconWarning, classed } from '@/src/react'
import type { ComponentProps, ComponentType } from 'react'

const Wrapper = classed('div', {
  base: 'flex items-start gap-8 p-12 border-solid border-l-[8px] !my-20',
  variants: {
    variant: {
      info: 'bg-information100 border-information500 [&_svg]:text-information500',
      warning: 'bg-warning50 border-warning500 [&_svg]:text-warning500'
    }
  },
  defaultVariants: {
    variant: 'info'
  }
})

type CalloutProps = ComponentProps<typeof Wrapper> & {
  icon?: ComponentType<{ width?: number }>
}

const VARIANT_ICONS = {
  info: IconInfo,
  warning: IconWarning
} as const

export function Callout({ children, variant = 'info', ...rest }: CalloutProps) {
  const Icon = VARIANT_ICONS[variant]
  return (
    <Wrapper variant={variant} {...rest}>
      <>
        {Icon ? (
          <div className="shrink-0 pt-2">
            <Icon width={20} />
          </div>
        ) : null}
        <div className="*:!m-0 *:!p-0">{children}</div>
      </>
    </Wrapper>
  )
}
