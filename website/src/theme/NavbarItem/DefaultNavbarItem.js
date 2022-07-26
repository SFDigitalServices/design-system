import React from 'react'
import clsx from 'clsx'
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink'

export default function DefaultNavbarItem ({
  mobile = false,
  // eslint-disable-next-line no-unused-vars
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop
  const mobileActiveClasses = 'text-slate-4 bg-grey-1'
  const activeClasses = 'text-slate-4 bg-grey-1'

  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? `menu__link--active ${mobileActiveClasses}` : `navbar__link--active ${activeClasses}`)
      }
    />
  )
}

function DefaultNavbarItemDesktop ({
  className,
  isDropdownItem = false,
  ...props
}) {
  const topNav = 'navbar__item navbar__link text-slate-2 border-white border-1 border-solid mx-20 rounded-4 hocus:border-grey-3'
  const topNavDropdown = 'dropdown__link text-slate-2'

  const element = (
    <NavbarNavLink
      className={clsx(
        isDropdownItem ? (topNavDropdown) : (topNav),
        className
      )}
      style={{ padding: '8px 12px' }}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  )
  if (isDropdownItem) {
    return <li>{element}</li>
  }
  return element
}

function DefaultNavbarItemMobile ({
  className,
  // eslint-disable-next-line no-unused-vars
  isDropdownItem,
  ...props
}) {
  return (
    <li className='menu__list-item'>
      <NavbarNavLink className={clsx('menu__link', className)} {...props} />
    </li>
  )
}
