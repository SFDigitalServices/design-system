import { SFGovIcon } from '../icons'

window.customElements.define('sfgov-icon', SFGovIcon)

if (!document.getElementById('sfgov-icon-css')) {
  const style = document.createElement('style')
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
