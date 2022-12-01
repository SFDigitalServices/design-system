import React from 'react'
import type { ComponentProps, ComponentType, ElementType } from 'react'
import type { SxProp, ThemeUIStyleObject } from 'theme-ui'

export type PropsMerger<P extends object> = (defaults: P, props: P) => P

export function defaultPropsMerger<P extends object> (defaults: P, props: P) {
  return { ...defaults, ...props }
}

export function withProps<P extends object = {}> (
  Component: ComponentType<P>,
  defaultProps: ComponentProps<typeof Component>,
  merge: PropsMerger<ComponentProps<typeof Component>> = defaultPropsMerger
) {
  return function ComponentWithProps (props: ComponentProps<typeof Component>) {
    return <Component {...merge(defaultProps, props)} />
  }
}

type AsProp = { as?: ElementType<any> }

export function withComponent <P extends AsProp = AsProp> (
  Component: ComponentType<P>,
  as: ElementType
) {
  const AsComponent = (props: P) => <Component {...props} as={as} />
  return withable(AsComponent)

  function withable (Comp: ComponentType<P>) {
    return Object.assign(Comp, {
      withComponent: (as: ElementType) => withComponent(Comp, as)
    })
  }
}

export function withStyles<P extends SxProp> (Component: ComponentType<P>, styles: ThemeUIStyleObject) {
  return function ComponentWithStyles (props: P) {
    return <Component {...props} sx={{ ...styles, ...props.sx }} />
  }
}

export function pxMap (values: number[]): Record<number, string> {
  return values.reduce((o, n) => Object.assign(o, { [n]: px(n) }), {})
}

export function px (n: number) {
  return n === 0 ? '0' : `${n}px`
}
