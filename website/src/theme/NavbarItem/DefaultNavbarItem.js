import React from 'react'
import clsx from 'clsx'
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink'
function DefaultNavbarItemDesktop ({
  className,
  isDropdownItem = false,
  ...props
}) {
  const element = (
    <NavbarNavLink
      className={clsx(
        isDropdownItem ? 'dropdown__link text-slate-4' : 'navbar__item navbar__link text-slate-4',
        className
      )}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  )
  if (isDropdownItem) {
    return <li>{element}</li>
  }
  return element
}
function DefaultNavbarItemMobile ({ className, isDropdownItem, ...props }) {
  return (
    <li className='menu__list-item'>
      <NavbarNavLink className={clsx('menu__link', className)} {...props} />
    </li>
  )
}
export default function DefaultNavbarItem ({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop
  const activeClasses = 'bg-slate-2 text-grey-1 rounded-4'
  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? `menu__link--active ${activeClasses}` : `navbar__link--active ${activeClasses}`)
      }
    />
  )
}
