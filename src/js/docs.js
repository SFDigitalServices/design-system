import '@github/clipboard-copy-element'
import '@github/details-dialog-element'
import { install } from '@github/hotkey'
import { observe } from 'selector-observer'
import { on } from 'delegated-events'

// Install all the hotkeys on the page
for (const el of document.querySelectorAll('[data-hotkey]')) {
  install(el)
}

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

    const wasHidden = el.getAttribute('aria-hidden') === 'true'
    el.textContent = el.getAttribute('data-copy-feedback')
    el.setAttribute('aria-hidden', false)

    this.addEventListener('blur', () => {
      el.textContent = el.getAttribute('data-default-text')
      if (wasHidden) el.setAttribute('aria-hidden', true)
    }, {
      once: true,
      capture: true,
      passive: true
    })
  }
})

on('click', 'input[type=checkbox]', function () {
  // TODO: handle validity behavior e.g. `this.getAttribute('aria-invalid') === 'false' ? ... : ....`
  if (this.checked) {
    this.parentNode.classList.add('bg-slate-1')
  } else {
    this.parentNode.classList.remove('bg-slate-1')
  }
})
