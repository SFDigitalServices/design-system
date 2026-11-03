import { jest as jestRef } from '@jest/globals'

export function mockMatchMedia(matches = false) {
  const listeners = new Set()

  const addEventListener = jestRef.fn((eventName, listener) => {
    if (eventName === 'change') listeners.add(listener)
  })

  const removeEventListener = jestRef.fn((eventName, listener) => {
    if (eventName === 'change') listeners.delete(listener)
  })

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jestRef.fn().mockImplementation(() => ({
      matches,
      media: '',
      onchange: null,
      addEventListener,
      removeEventListener,
      dispatchEvent: jestRef.fn()
    }))
  })

  return {
    change(nextMatches) {
      window.matchMedia = jestRef.fn().mockImplementation(() => ({
        matches: nextMatches,
        media: '',
        onchange: null,
        addEventListener,
        removeEventListener,
        dispatchEvent: jestRef.fn()
      }))

      listeners.forEach((listener) => listener({ matches: nextMatches }))
    },
    addEventListener,
    removeEventListener,
    listenerCount() {
      return listeners.size
    }
  }
}
