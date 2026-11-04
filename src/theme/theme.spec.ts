import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import theme from './index'

it('generates utility values from the theme scales', async () => {
  const utilities = [
    ['w-80', 'width', '80px'],
    ['max-w-80', 'max-width', '80px'],
    ['h-80', 'height', '80px'],
    ['p-20', 'padding', '20px'],
    ['m-28', 'margin', '28px'],
    ['gap-40', 'gap', '40px'],
    ['rounded-4', 'border-radius', '4px'],
    ['border-3', 'border-width', '3px'],
    ['leading-56', 'line-height', '56px'],
    ['text-desktop-display-xxxl', 'line-height', '56px']
  ]
  const result = await postcss([
    tailwindcss({
      theme,
      content: [{ raw: utilities.map(([className]) => className).join(' ') }]
    })
  ]).process('@tailwind utilities;', { from: undefined })

  for (const [className, property, value] of utilities) {
    const declarations: string[] = []
    result.root.walkRules(`.${className}`, (rule) => {
      rule.walkDecls(property, (declaration) => {
        declarations.push(declaration.value)
      })
    })
    expect(declarations).toEqual([value])
  }
})
