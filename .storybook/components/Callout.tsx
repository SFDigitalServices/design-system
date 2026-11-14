import { IconInfo, classed } from '@/src/react'
import type { ComponentProps, ComponentType } from 'react'

const Wrapper = classed('div', {
  base: 'flex items-start gap-8 bg-information100 p-12 border-information500 border-solid border-l-[8px] !my-20'
})

type CalloutProps = ComponentProps<typeof Wrapper> & {
  icon?: ComponentType<{ width?: number }>
}

export function Callout({
  icon: Icon = IconInfo,
  children,
  ...rest
}: CalloutProps) {
  return (
    <Wrapper {...rest}>
      <>
        {Icon ? (
          <div className="shrink-0 text-information500 pt-2">
            <Icon width={20} />
          </div>
        ) : null}
        <div className="*:!m-0 *:!p-0">{children}</div>
      </>
    </Wrapper>
  )
}
