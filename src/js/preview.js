window.customElements.define('style-descriptor', class StyleDescriptor extends HTMLElement {
  connectedCallback () {
    const target = this.getAttribute('data-target')
    const el = target ? document.querySelector(target) : this
    const style = window.getComputedStyle(el)
    const targets = this.querySelectorAll('[data-css-property]')
    for (const target of targets) {
      const prop = target.getAttribute('data-css-property')
      const value = style.getPropertyValue(prop)
      target.setAttribute('data-css-value', value)
      target.textContent = value
    }
  }
})
