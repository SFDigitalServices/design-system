/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormSchema } from './types'
import type { MethodOf, AnyFunction } from './types/utils'

/**
 * Replace the named method on an object with a new function that receives the
 * original implementation as the first argument:
 *
 * ```js
 * const foo = {
 *   render (x: string) => `yo(${x})`
 * }
 *
 * hook(foo, 'render', (render, x: string) => render(x.toUpperCase()))
 *
 * foo.render('hi') // 'yo(HI)'
 * ```
 *
 * Note the typescript gymnastics here provide autocomplete on the method name
 * and don't ensure type safety of the function signature.
 */
export function hook<T extends object>(
  obj: T,
  method: MethodOf<T>,
  wrap: (impl: AnyFunction, ...args: any[]) => any
) {
  const impl = obj[method] as AnyFunction
  // @ts-expect-error derp
  obj[method] = function (...args: any[]) {
    return wrap.call(this, impl.bind(this), ...args)
  }
  return impl
}

/**
 * Create a shallow copy of an object without any of the provided keys, a la:
 * https://lodash.com/docs/4.17.15#omit
 */
// istanbul ignore next
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: (K | string)[]
): Omit<T, K> {
  const copy = { ...obj }
  for (const key of keys) {
    delete copy[key as K]
  }
  return copy
}

const PROD_CONSOLE_NOOPS = ['debug', 'info', 'log']

export function getConsole(isDev = false): Console {
  if (isDev) {
    const noop = () => undefined
    // copy all of the methods from the console and bind them to the original
    // console object unless they're listed in PROD_CONSOLE_NOOPS
    return Object.fromEntries(
      Object.entries(console)
        .filter(([, v]) => typeof v === 'function')
        .map(([method]) => [
          method,
          PROD_CONSOLE_NOOPS.includes(method)
            ? noop
            : // @ts-expect-error whateverrrr
              console[method].bind(console)
        ])
    ) as Console
  }
  return console
}

export function isFormSurvey(schema: FormSchema) {
  return schema.properties?.isFormSurvey === 'true'
}
