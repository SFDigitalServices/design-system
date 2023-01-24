import React from 'react'
import PropTypes from 'prop-types'
// import Icon from '../../src/Icon'
import { withClasses } from '../utils'
import clsx from 'clsx'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=736%3A0'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const Kbd = withClasses(({ text, children = text, ...rest }) => (
  <kbd {...rest}>{children}</kbd>
), 'bg-blue-1 text-slate-4')

Kbd.storyName = '<kbd>'

Kbd.args = {
  text: 'Enter'
}

Kbd.argTypes = {
  text: {
    name: 'Key',
    type: 'string'
  }
}

/** @type {import('@storybook/react').Story} */
export const KeyCombo = ({ keys, children = keys, glue, className, ...rest }) => {
  if (!keys?.length) {
    return null
  } else if (keys.length === 1) {
    return <Kbd className={className} {...rest}>{keys[0]}</Kbd>
  }

  const Glue = React.isValidElement(glue)
    ? glue
    : () => <span>{glue || '+'}</span>
  return (
    <span className={clsx('inline-flex gap-x-8 text-slate-4 mr-8', className)}>
      {React.Children.map(children, (child, i) => (
        <>
          {i > 0 && <Glue />}
          <Kbd>{child}</Kbd>
        </>
      ))}
    </span>
  )
}

KeyCombo.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.any,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  glue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

KeyCombo.args = {
  keys: [
    'Control',
    'Right arrow'
  ],
  glue: '+'
}

KeyCombo.argTypes = {
  keys: {
    name: 'Keys'
  },
  glue: {
    name: 'Glue',
    options: ['+', 'or', 'and'],
    control: 'select'
  }
}

/** @type {import('@storybook/react').Story} */
export const KeyboardHelp = ({
  title,
  text,
  commands,
  children = <CommandList commands={commands} />,
  className,
  ...rest
}) => (
  <div className='rounded bg-blue-1 text-slate-4 p-20 md:p-40 flex items-start gap-20'>
    {/* FIXME: use accessibility icon */}
    {/* <Icon symbol='info' className='pt-4' /> */}
    <div className='space-y-20'>
      {title && <h2 className='title-sm m-0'>{title}</h2>}
      {children}
    </div>
  </div>
)

KeyboardHelp.args = {
  title: 'Navigating dashboards with a keyboard',
  commands: {
    'Control + Enter': 'to enter the dashboard',
    'Tab + Arrow': 'to move between visuals',
    'Control + Right arrow': 'to enter a visual or filter',
    Escape: 'to exit a visual or dashboard',
    'Navigating within a visual or filter': {
      'Tab or Arrow': 'to move around a table or visual',
      Enter: 'to select within a table or visual',
      'Enter or Spacebar': 'to select or deselect a filter'
    }
  }
}

function CommandList ({ commands, ...rest }) {
  if (!commands) {
    return null
  }
  let currentList = []
  const children = [currentList]
  for (const [keysOrTitle, labelOrSubcommands] of Object.entries(commands)) {
    if (labelOrSubcommands instanceof Object) {
      currentList = []
      children.push(
        currentList,
        <h3 className='text-medium m-0'>{keysOrTitle}</h3>,
        <CommandList commands={labelOrSubcommands} />
      )
    } else {
      currentList.push(
        <li key={keysOrTitle}><KeyCombo {...parseKeys(keysOrTitle)} className='mr-8' />{' '}{labelOrSubcommands}</li>
      )
    }
  }
  return children.map(child => (
    Array.isArray(child)
      ? <ul className='list-none m-0 p-0 space-y-20'>{child}</ul>
      : child
  ))
}

/**
 * @param {string} keyString 
 * @returns {{ keys: string[], glue?: string }}
 */
function parseKeys (keyString) {
  if (keyString.includes('+')) {
    return {
      keys: keyString.split(/\s*\+\s+/),
      glue: '+'
    }
  } else {
    const glue = keyString.match(/\s+([a-z]+)\s+/)?.[1]
    return glue
      ? { keys: keyString.split(glue), glue }
      : { keys: [keyString] }
  }
}
