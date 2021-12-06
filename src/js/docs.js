import '@github/clipboard-copy-element'
import { install } from '@github/hotkey'
import { observe } from 'selector-observer'
import { on } from 'delegated-events'

// Install all the hotkeys on the page
for (const el of document.querySelectorAll('[data-hotkey]')) {
  install(el)
}

on('click', '[data-copy-feedback]', ({ currentTarget }) => {
  const text = currentTarget.getAttribute('data-copy-feedback')
  const el = createBubble(text, { fade: true })
  currentTarget.appendChild(el)
})

observe('clipboard-copy[role=button]', {
  add (el) {
    if (el.querySelector('button, [role=button]')) {
      el.removeAttribute('role')
      el.removeAttribute('tabindex')
    }
  }
})

function createBubble (text, options) {
  const bubble = document.createElement('div')
  bubble.classList.add(
    'rounded-4', 'px-8', 'py-4',
    'bg-slate-4', 'text-white', 'text-small',
    'absolute', 'top-full', 'right-0', 'mt-4'
  )
  bubble.textContent = text
  if (options?.fade) {
    const opacityClass = 'opacity-100'
    bubble.classList.add(
      opacityClass,
      'transition-opacity',
      'ease-in', 'duration-250'
    )
    setTimeout(() => {
      bubble.classList.replace(opacityClass, 'opacity-0')
      setTimeout(() => bubble.remove(), 1000)
    }, 750)
  }
  return bubble
}
