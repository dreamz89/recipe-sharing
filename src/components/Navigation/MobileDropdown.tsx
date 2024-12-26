import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import Icon from '@/components/icons/Icon'
import ArrowBracket from '@/components/icons/ArrowBracket'
import Gear from '@/components/icons/Gear'
import User from '@/components/icons/User'
import Book from '@/components/icons/Book'
import Edit from '@/components/icons/Edit'
import BaseLink from '@/components/ui/Link'
import useClickOutside from '@/hooks/useClickOutside'

interface Props {
  className: string
  onLinkClick: () => void
}

const MobileDropdown = ({ className, onLinkClick }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const isAuth = true

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    const target = e.target as Element
    if (!target?.classList.contains('mobileDropdownTrigger')) {
      onLinkClick()
    }
  }

  useClickOutside(ref, handleClickOutside)

  return (
    <div
      ref={ref}
      className={twMerge(
        'absolute right-0 z-40 flex w-full translate-y-[-100%] flex-col gap-y-4 rounded-b-lg bg-white p-4 shadow duration-200',
        className
      )}
    >
      <BaseLink
        type="navlink"
        to="/recipes"
        className="flex gap-2"
        onLinkClick={onLinkClick}
      >
        <Icon>
          <Book />
        </Icon>
        Recipes
      </BaseLink>
      <BaseLink
        type="navlink"
        to="/recipes/create"
        className="flex gap-2"
        onLinkClick={onLinkClick}
      >
        <Icon>
          <Edit />
        </Icon>
        Create
      </BaseLink>
      <hr className="w-52 border-gray300" />
      {isAuth ? (
        <>
          <BaseLink
            type="navlink"
            to="/profile"
            className="flex gap-2"
            onLinkClick={onLinkClick}
          >
            <Icon>
              <User />
            </Icon>
            Profile
          </BaseLink>
          <BaseLink
            type="navlink"
            to="/settings/account"
            className="flex gap-2"
            onLinkClick={onLinkClick}
          >
            <Icon>
              <Gear />
            </Icon>
            Settings
          </BaseLink>
          <button
            className="flex gap-2 hover:text-orange400"
            onClick={onLinkClick}
          >
            <Icon>
              <ArrowBracket />
            </Icon>
            Log out
          </button>
        </>
      ) : (
        <div className="flex gap-x-4">
          <BaseLink
            type="buttonlink"
            variant="secondary"
            to="/login"
            onLinkClick={onLinkClick}
          >
            Login
          </BaseLink>
          <BaseLink type="buttonlink" to="/signup" onLinkClick={onLinkClick}>
            Sign up
          </BaseLink>
        </div>
      )}
    </div>
  )
}

export default MobileDropdown
