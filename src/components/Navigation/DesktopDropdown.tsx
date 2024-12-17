import { twMerge } from 'tailwind-merge'

import ArrowBracket from '@/components/icons/ArrowBracket'
import Gear from '@/components/icons/Gear'
import Icon from '@/components/icons/Icon'
import User from '@/components/icons/User'
import BaseLink from '@/components/ui/Link'

interface Props {
  className: string
  onLinkClick: () => void
}

const DesktopDropdown = ({ className, onLinkClick }: Props) => {
  return (
    <div
      className={twMerge(
        'absolute right-0 flex translate-y-[-100%] flex-col gap-y-4 rounded-b-lg bg-white p-4 shadow duration-200',
        className
      )}
    >
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
        to="/settings"
        className="flex gap-2"
        onLinkClick={onLinkClick}
      >
        <Icon>
          <Gear />
        </Icon>
        Settings
      </BaseLink>
      <button className="flex gap-2 hover:text-orange400" onClick={onLinkClick}>
        <Icon>
          <ArrowBracket />
        </Icon>
        Log out
      </button>
    </div>
  )
}

export default DesktopDropdown
