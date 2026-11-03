import type { ComponentProps } from 'react'
import { HeadingSm } from './Text'
import { classed } from './utils'

const PageLabelWrapper = classed('div', {
  base: 'space-y-0',
  variants: {
    isHidden: {
      true: 'sr-only',
      false: ''
    }
  }
})

export type PageLabelProps = ComponentProps<typeof PageLabelWrapper>

export function PageLabel({ children, ...rest }: PageLabelProps) {
  return (
    <PageLabelWrapper data-testid="page-label" {...rest}>
      <HeadingSm as="p" className="text-accent500 !mb-0 uppercase">
        {children}
      </HeadingSm>
      <div className="w-12 h-4 bg-accent500" />
    </PageLabelWrapper>
  )
}
