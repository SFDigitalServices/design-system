import { SFGovIcon } from './sfgov-icon'

if (typeof window?.customElements !== 'undefined') {
  window.customElements.define('sfgov-icon', SFGovIcon)
}

export { SFGovIcon }
