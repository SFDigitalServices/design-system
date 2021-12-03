import { install } from '@github/hotkey'

const fontWeightLookup = {
  300: 'Light',
  400: 'Regular',
  500: 'Medium'
}

// Install all the hotkeys on the page
for (const el of document.querySelectorAll('[data-hotkey]')) {
  install(el)
}

window.customElements.define('computed-style', class extends HTMLElement {
  connectedCallback () {
    this.style.display = 'block'
    this.render()
    window.addEventListener('resize', () => this.render())
  }

  render () {
    const target = this.getAttribute('data-target')
    const el = target ? document.querySelector(target) : this
    const style = window.getComputedStyle(el)
    const targets = this.querySelectorAll('[data-css-property]')
    for (const target of targets) {
      const prop = target.getAttribute('data-css-property')
      const rawValue = style.getPropertyValue(prop)
      const { value, units } = this.parseValue(rawValue, prop)
      target.setAttribute('data-css-value', value)
      target.setAttribute('data-css-units', units)
      const text = target.getAttribute('data-units') === 'false'
        ? value
        : rawValue
      const ignore = target.getAttribute('data-ignore')
      if (text && text !== ignore) {
        const format = target.getAttribute('data-format')
        target.textContent = format
          ? format.replace('%s', text)
          : text
      } else {
        target.textContent = target.getAttribute('data-empty') || ''
      }
    }
  }

  parseValue (value, prop) {
    if (prop === 'font-weight') {
      return {
        value: fontWeightLookup[value] || value,
        units: undefined
      }
    }
    const match = value.match(/^(?<value>.+)(?<units>px|%|r?em)$/)
    if (match) {
      return match.groups
    } else {
      return { value, units: undefined }
    }
  }
})
