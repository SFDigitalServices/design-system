module.exports = {
  names: ['no-empty'],
  description: 'Empty document',
  tags: ['local'],
  function: (params, onError) => {
    const { tokens } = params

    if (!tokens.length || tokens.every(empty)) {
      onError({
        lineNumber: 1,
        detail: 'expected content'
      })
    }
  }
}

function empty (token) {
  return !token.content || !token.content.trim()
}
