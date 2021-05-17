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
      const { value, units } = this.parseValue(rawValue)
      target.setAttribute('data-css-value', value)
      target.setAttribute('data-css-units', units)
      target.textContent = target.getAttribute('data-units') === 'false'
        ? value
        : rawValue
    }
  }

  parseValue (value) {
    const match = value.match(/^(?<value>.+)(?<units>px|%|r?em)$/)
    if (match) {
      return match.groups
    } else {
      return { value, units: undefined }
    }
  }
})
