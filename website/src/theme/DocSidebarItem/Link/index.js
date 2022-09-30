import React from 'react'
import clsx from 'clsx'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal'
import Link from '@docusaurus/Link'
import isInternalUrl from '@docusaurus/isInternalUrl'
import IconExternalLink from '@theme/Icon/ExternalLink'
import styles from './styles.module.css'
export default function DocSidebarItemLink ({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className } = item
  const isActive = isActiveSidebarItem(item, activePath)
  const isInternalLink = isInternalUrl(href)
  const sideNav = 'menu__link font-regular text-slate-3 dark:text-slate-1 border-1 border-solid rounded-4 border-white dark:border-black hocus:border-grey-3 hocus:bg-none dark:hover:border-grey-4 dark:focus:border-grey-4'
  const sideNavActive = 'menu__link--active dark:bg-grey-4'
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className
      )}
      key={label}>
      <Link
        className={clsx(
          (sideNav),
          !isInternalLink && styles.menuExternalLink,
          isActive && (sideNavActive)
        )}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined
        })}
        {...props}>
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  )
}
