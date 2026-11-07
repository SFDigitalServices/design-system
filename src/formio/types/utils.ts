/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Omit any keys of the first object belonging to the second object before
 * unioning.
 */
export type Override<T extends object, O extends object> = Omit<T, keyof O> & O

export type AnyFunction = (...args: any[]) => any

// 🙃
export type MethodOf<T extends object> = {
  [K in keyof T]: T[K] extends (this: T, ...args: any[]) => any | AnyFunction
    ? K
    : never
}[keyof T]
