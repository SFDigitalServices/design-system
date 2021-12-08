import '@github/clipboard-copy-element'
import { observe } from 'selector-observer'
import { on } from 'delegated-events'

observe('clipboard-copy[role=button]', {
  add (el) {
    if (el.querySelector('button, [role=button]')) {
      el.removeAttribute('role')
      el.removeAttribute('tabindex')
    }
  }
})

on('click', 'clipboard-copy', function () {
  const el = this.querySelector('[data-copy-feedback]')
  if (el) {
    if (!el.hasAttribute('data-default-text')) {
      el.setAttribute('data-default-text', el.textContent)
    }
    el.textContent = el.getAttribute('data-copy-feedback')
    this.addEventListener('blur', () => {
      el.textContent = el.getAttribute('data-default-text')
    }, { once: true, capture: true, passive: true })
  }
})
