import { SFGovIcon } from '../icons'

// make it available globally, just in case something goes wrong when
// registering...
Object.assign(window, { SFGovIcon })

window.customElements.define('sfgov-icon', SFGovIcon)

;(styleId => {
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      sfgov-icon {
        display: inline-flex;
        align-items: center;
      }
      sfgov-icon svg {
        fill: currentColor;
      }
    `
    document.head.appendChild(style)
  }
})('sfgov-icon-css')
