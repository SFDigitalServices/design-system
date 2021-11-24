import amplitude from 'amplitude-js'
import { getCLS, getFID, getLCP } from 'web-vitals'
import preval from 'preval.macro'

const AMPLITUDE_API_KEY = preval`module.exports = process.env.AMPLITUDE_API_KEY`
if (AMPLITUDE_API_KEY) {
  const amp = amplitude.getInstance().init(AMPLITUDE_API_KEY)
  const log = amp.logEvent.bind(amp)
  const url = new URL(location.href)
  const props = {
    page_url: url.toString(),
    page_path: url.pathname
  }
  log('view', props)

  const logPerformance = metric => log('performance', { ...props, ...metric })
  const nav = window.performance?.getEntriesByType('navigation')[0]
  if (nav) logPerformance({ name: 'navigation', ...nav })

  getCLS(logPerformance)
  getFID(logPerformance)
  getLCP(logPerformance)
}
