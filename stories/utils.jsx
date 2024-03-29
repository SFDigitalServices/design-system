import React from 'react'
import clsx from 'clsx'
import packageJson from '../package.json'
import { Box } from '../react'

/**
 * Merge the `className` and `style` keys of one or more prop objects.
 * 
 * @param  {...{ className: import('clsx').ClassValue, style: Record<string, any> }} items
 * @returns {{ className: string, style: Record<string, any>, [string]: any }}
 */
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

/**
 * Utility function for "binding" (essentially cloning) a React component,
 * accounting for the possiblity that the component is not a function (with
 * a `.bind()` method). Always returns a function that can be re-bound.
 * 
 * @param {React.ComponentType<any>} Component
 * @returns {React.FC}
 */
export function bind (Component) {
  if ('bind' in Component) {
    return Component.bind({})
  } else {
    return function BoundComponent (props) {
      return <Component {...props} />
    }
  }
}

/**
 * A placeholder for unimplemented components.
 */
export const Stub = ({ children, css, ...rest }) => (
  <Box css={{
    bg: '$action',
    fg: '$white',
    p: 40,
    ...css
  }} {...rest}>{children || 'TODO'}</Box>
)

/**
 * Wrap a component in such a way that the received `className` prop merges the
 * provided static classes with the render-time `className` prop so that:
 * 
 * ```jsx
 * const Foo = withClasses('div', 'foo')
 * <Foo /> → <div className='foo'
 * <Foo className='bar' /> → <div className='foo bar' />
 * ```
 *
 * @param {React.FC} Component 
 * @param  {import('clsx').ClassValue[]} classes 
 * @returns {React.FC}
 */
export const withClasses = (Component, ...classes) => {
  return withPropsTransform(Component, (props, context) => {
    return mergeProps(props, { className: clsx(...classes, context?.className) })
  })
}

/**
 * Wrap a component in such a way that the input props will be transformed before
 * being passed to the underlying implementation. This is helpful for extracting
 * transient props that shouldn't be passed as DOM attributes.
 * 
 * @param {React.FC} Component 
 * @param {Function<React.PropsWithChildren, React.PropsWithChildren>} transform 
 * @returns {React.FC}
 */
export function withPropsTransform (Component, transform) {
  return function ComponentWithPropsTransform (props, context) {
    return <Component {...transform(props, context)} />
  }
}

/**
 * @param {string | React.Component}
 * @param {React.PropsWithChildren?}
 * @returns {React.FC}
 */
export function polymorphic (defaultComponent, defaultProps) {
  return function Polymorphic ({ as: Component = defaultComponent, ...rest }) {
    return <Component {...mergeProps(defaultProps, rest)} />
  }
}

/**
 * @param {React.FC<React.PropsWithChildren & { content: React.ReactElement }>} Component 
 * @returns {React.FC<Omit<React.PropsWithChildren, 'content'>>}
 */
export function withContentProp (Component) {
  return withPropsTransform(Component, ({ content, children, ...rest }) => ({
    children: content || children,
    ...rest
  }))
}

/**
 * 
 * @param {Record<string, { $label: string, [string]: any }>} variants 
 * @param {Record<string, any>?} argType 
 * @returns 
 */
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

/**
 * 
 * @param {React.FC} Component 
 * @param {Record<string, React.PropsWithoutRef>} variants 
 * @param {string} defaultVariant 
 * @returns {import('@storybook/react').Story}
 */
export function withVariants (Component, variants, defaultVariant = 'default') {
  /** @type {import('@storybook/react').Story} */
  function VariantComponent ({ variant, ...rest }) {
    const { $label, ...variantProps } = variants[variant || defaultVariant]
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

export function getDocsBaseUrl () {
  return process.env.NODE_ENV === 'production'
    ? ''
    : `http://localhost:${packageJson.config.website_port}`
}
