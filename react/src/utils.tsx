import React, { Component, ComponentProps, ComponentType } from 'react'

export function identity (v: any) {
  return v
}

export function pxMap (values: number[]): Record<number, string> {
  return values.reduce((o, n) => Object.assign(o, { [n]: px(n) }), {})
}

export function px (n: number | string) {
  return (typeof n === 'string') ? n : n === 0 ? '0' : `${n}px`
}

export function withFixedProps (
  Component: ComponentType<any>,
  fixed: Partial<ComponentProps<typeof Component>>
) {
  type Unfixed = Omit<ComponentProps<typeof Component>, keyof typeof fixed>
  return function FixedProps (props: Unfixed) {
    return <Component {...fixed} {...props} />
  }
}

export type VariantProps<T, P extends {} = T extends ComponentType ? ComponentProps<T> : T> = T & JSX.IntrinsicAttributes