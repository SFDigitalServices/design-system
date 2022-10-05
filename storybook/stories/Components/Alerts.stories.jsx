import clsx from 'clsx'
import React, { useRef } from 'react'
import Icon from '../../src/Icon'
import { mergeProps, variantArgType, withClasses, withVariants } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Components / Alerts & Banners',
  args: {
    text: 'A very extreme and urgent thing is about to happen in San Francisco.'
  },
  argTypes: {
    text: {
      name: 'Text',
      type: 'string'
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
    }
  }
}

export function Banner ({ className, ...props }) {
  const [children, rest] = useBannerContent(props)
  return (
    <div className='bg-slate-4 text-white'>
      <div className='responsive-container py-20 lg:py-28 flex gap-20 justify-center items-center' {...rest}>
        {children}
      </div>
    </div>
  )
}

Banner.args = {
  linkText: 'Learn more',
  href: 'https://sf.gov'
}

Banner.argTypes = {
  linkText: {
    name: 'Link text',
    type: 'string'
  },
  href: {
    name: 'Link URL (href)',
    type: 'string'
  }
}

Banner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=2317%3A238'
  }
}

export const BannerAlert = withVariants(function ({ className, ...props }, context) {
  const [children, rest] = useBannerContent(props)
  return (
    <div className={className}>
      <div className='responsive-container py-20 lg:py-28 flex gap-20 justify-center items-center' {...rest}>
        <Icon symbol='alert' />
        <div>{children}</div>
      </div>
    </div>
  )
}, {
  info: {
    label: 'Information',
    className: 'bg-blue-2 text-slate'
  },
  warning: {
    label: 'Warning',
    className: 'bg-yellow-3 text-slate'
  },
  critical: {
    label: 'Critical',
    className: 'bg-red-3 text-white'
  }
})

BannerAlert.args = {
  ...Banner.args,
  variant: 'info'
}

BannerAlert.argTypes = {
  ...Banner.argTypes,
  ...BannerAlert.argTypes
}

BannerAlert.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3224'
  }
}

export const FormAlert = (() => {
  const Container = withClasses('div', 'flex flex-col content-start md:flex-row text-slate')
  const IconContainer = withClasses('div', 'flex px-28 py-12 rounded-t md:rounded-l md:rounded-t-0 md:py-28 md:px-8')
  const AlertMessage = withClasses('div', 'px-28 py-12 rounded-b md:rounded-r md:rounded-l-0 md:p-28')
  
  function FormAlert ({ icon, alert, message, className, ...props }) {
    const [children, rest] = useBannerContent(props)
    return (
      <Container {...rest}>
        <IconContainer {...alert}>
          <Icon symbol={icon} class='flex items-start' />
        </IconContainer>
        <AlertMessage {...message}>
          {children}
        </AlertMessage>
      </Container>
    )
  }

  return withVariants(FormAlert, {
    info: {
      $label: 'Information',
      icon: 'info',
      alert: { className: 'bg-blue-2' },
      message: { className: 'bg-blue-1'}
    },
    success: {
      $label: 'Success',
      icon: 'check',
      alert: { className: 'bg-green-3 text-white' },
      message: { className: 'bg-green-1'}
    },
    failure: {
      $label: 'Failure',
      icon: 'close',
      alert: { className: 'bg-red-3 text-white' },
      message: { className: 'bg-red-1' }
    },
    warning: {
      $label: 'Warning',
      icon: 'info', // FIXME: needs 'caution' symbol
      alert: { className: 'bg-yellow-3' },
      message: { className: 'bg-yellow-1' }
    }
  }, 'info')
})()

FormAlert.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=6454%3A6245'
  }
}

export const Callout = withVariants(function ({ className, ...props }) {
  const [children, rest] = useBannerContent(props)
  return (
    <div className={className}>
      <div className='responsive-container py-20 lg:py-28 flex gap-20 justify-center items-center' {...rest}>
        <Icon symbol='alert' />
        <div>{children}</div>
      </div>
    </div>
  )
  }, {
  default: {
    className: 'bg-grey-1 text-slate'
  },
  alt: {
    $label: 'Alt',
    className: 'bg-blue-1 text-slate'
  }
})

Callout.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
  }
}

function useBannerContent ({ text, href, linkText, children, ...rest }) {
  return [
    children || <>{text}{' '}<a href={href} className='text-inherit'>{linkText}</a></>,
    rest
  ]
}
