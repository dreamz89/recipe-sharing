import { ReactNode } from 'react'
import { NavLink, Link } from 'react-router'
import { twMerge } from 'tailwind-merge'

interface Props {
  type: 'navlink' | 'buttonlink' | 'textlink'
  variant?: 'primary' | 'secondary'
  to: string
  className?: string
  onLinkClick?: () => void
  children: ReactNode
}

const BaseLink = ({
  type,
  variant = 'primary',
  to,
  className,
  onLinkClick,
  children,
}: Props) => {
  if (type === 'navlink') {
    return (
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          isActive
            ? twMerge('text-orange400 underline underline-offset-4', className)
            : twMerge('hover:text-orange400', className)
        }
        onClick={onLinkClick}
      >
        {children}
      </NavLink>
    )
  } else if (type === 'buttonlink') {
    if (variant === 'primary') {
      return (
        <Link
          to={to}
          className={twMerge('btn-primary', className)}
          onClick={onLinkClick}
        >
          {children}
        </Link>
      )
    } else if (variant === 'secondary') {
      return (
        <Link
          to={to}
          className={twMerge('btn-secondary', className)}
          onClick={onLinkClick}
        >
          {children}
        </Link>
      )
    }
  } else if (type === 'textlink') {
    return (
      <Link
        to={to}
        className={twMerge('text-link', className)}
        onClick={onLinkClick}
      >
        {children}
      </Link>
    )
  }
}

export default BaseLink
