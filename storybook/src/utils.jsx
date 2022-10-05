import React from 'react'
import clsx from 'clsx'

export function mergeProps (...items) {
  const props = {}
  const filtered = items.filter(Boolean)
  const classes = []
  const styles = {}
  for (const { className, style, ...rest } of filtered) {
    classes.push(className)
    Object.assign(styles, style)
    Object.assign(props, rest)
  }
  return Object.assign(props, {
    className: clsx(classes),
    style: styles
  })
}

export function withClasses (Component, ...classes) {
  return (props, context) => <Component {...mergeProps(props, { className: clsx(...classes, context?.className) })} />
}

export function variantArgType (variants, argType) {
  const { control, ...rest } = argType || {}
  return {
    name: 'Variant',
    options: Object.keys(variants),
    control: {
      type: 'select',
      labels: Object.fromEntries(
        Object.entries(variants).map(([key, { $label }]) => [key, $label || key])
      ),
      ...control
    },
    ...rest
  }
}

export function withVariants (Component, variants, defaultVariant = 'default') {
  function VariantComponent ({ variant, ...rest }) {
    const { $label, ... variantProps } = variants[variant || defaultVariant]
    return <Component {...mergeProps(variantProps, rest)} />
  }
  
  VariantComponent.args = {
    variant: defaultVariant,
    ...Component.args
  }

  VariantComponent.argTypes = {
    ...Component.argTypes,
    variant: variantArgType(variants)
  }

  return VariantComponent
}
