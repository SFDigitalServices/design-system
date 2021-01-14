for (const code of document.querySelectorAll('.Code')) {
  trim(code)
}

function trim (el) {
  switch (el.nodeType) {
    case Node.TEXT_NODE:
      el.textContent = el.textContent.trim()
      break

    case Node.ELEMENT_NODE:
      trim(el.firstChild)
      trim(el.lastChild)
      break
  }
}
