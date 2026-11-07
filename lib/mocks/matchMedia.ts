import { jest as jestRef } from '@jest/globals'

type MatchMedia = typeof window.matchMedia
type MatchesListener = (arg: { matches: string }) => void

export function mockMatchMedia(matches = false) {
  const listeners = new Set<MatchesListener>()

  const addEventListener = jestRef.fn(
    (eventName: string, listener: MatchesListener) => {
      if (eventName === 'change') listeners.add(listener)
    }
  )

  const removeEventListener = jestRef.fn(
    (eventName: string, listener: MatchesListener) => {
      if (eventName === 'change') listeners.delete(listener)
    }
  )

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
    change(nextMatches: string) {
      window.matchMedia = jestRef.fn().mockImplementation(() => ({
        matches: nextMatches,
        media: '',
        onchange: null,
        addEventListener,
        removeEventListener,
        dispatchEvent: jestRef.fn()
      })) as MatchMedia

      listeners.forEach((listener) => listener({ matches: nextMatches }))
    },
    addEventListener,
    removeEventListener,
    listenerCount() {
      return listeners.size
    }
  }
}
