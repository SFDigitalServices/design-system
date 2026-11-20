import { expect } from '@jest/globals'
import '@testing-library/jest-dom/extend-expect'
import type { Result, Rule } from 'postcss'
import { mockMatchMedia } from './lib/mocks/matchMedia'

mockMatchMedia(false)

expect.extend({
  toHaveSelector(
    css: Result,
    selector: string | RegExp,
    expected: Record<string, string>
  ) {
    let found: Rule | undefined
    css.root.walkRules(selector, (rule) => {
      found = rule
    })

    if (!found) {
      return {
        pass: false,
        message: () => `Selector "${selector}" not found`
      }
    }

    const received: Record<string, string> = {}
    found.walkDecls(({ prop, value }) => {
      if (prop in expected) {
        received[prop] = value
      }
    })

    const { isNot, utils, equals } = this
    const pass = equals(expected, received)
    return {
      pass,
      message: () => {
        const hint = utils.matcherHint('toHaveSelector', undefined, undefined, {
          isNot
        })
        const output = [
          `Expected: ${utils.printExpected(expected)}`,
          `Received: ${utils.printReceived(received)}`
        ].join('\n')
        if (pass) {
          return [hint, '', output].join('\n')
        }
        const diff = utils.diff(expected, received, { expand: this.expand })
        return diff?.includes('- Expect') ? diff : output
      }
    }
  }
})
