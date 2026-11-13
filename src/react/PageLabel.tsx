import type { ComponentProps } from 'react'
import { HeadingSm } from './Text'
import { classed } from './utils'

const PageLabelWrapper = classed('div', {
  base: 'space-y-0 bg-primary50 rounded-4 w-fit',
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
      <HeadingSm
        as="p"
        className="text-primary600 px-[10px] py-[6px] !mb-0 uppercase"
      >
        {children}
      </HeadingSm>{' '}
    </PageLabelWrapper>
  )
}
