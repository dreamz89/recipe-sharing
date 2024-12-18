import { useState } from 'react'
import Burger from '@/components/icons/Burger'
import Cross from '@/components/icons/Cross'
import Icon from '@/components/icons/Icon'
import Button from '@/components/ui/Button'
import BaseLink from '@/components/ui/Link'

import MobileDropdown from './MobileDropdown'
import DesktopDropdown from './DesktopDropdown'

const Navigation = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState<boolean>(false)
  const [showDesktopDropdown, setShowDesktopDropdown] = useState<boolean>(false)
  const isAuthenticated = true

  const toggleMobileDropdown = () => {
    setShowMobileDropdown((prevShowMobileDropdown) => !prevShowMobileDropdown)
  }

  const closeMobileDropdown = () => setShowMobileDropdown(false)

  const toggleDesktopDropdown = () => {
    setShowDesktopDropdown(
      (prevShowDesktopDropdown) => !prevShowDesktopDropdown
    )
  }

  const closeDesktopDropdown = () => setShowDesktopDropdown(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow shadow-gray300">
        <div className="container relative flex h-16 justify-between py-3">
          <div className="flex items-center gap-x-6">
            <BaseLink type="navlink" to="/">
              <span className="font-bold">Recipe</span>Sharing
            </BaseLink>
            <BaseLink type="navlink" to="/recipes" className="hidden lg:block">
              Recipes
            </BaseLink>
            <BaseLink
              type="navlink"
              to="/recipes/create"
              className="hidden lg:block"
            >
              Create
            </BaseLink>
          </div>
          <div className="hidden items-center gap-x-6 lg:flex">
            {isAuthenticated ? (
              <Button
                variant="primary"
                onClick={toggleDesktopDropdown}
                className="desktopDropdownTrigger w-10 justify-center"
              >
                JT
              </Button>
            ) : (
              <>
                <BaseLink type="buttonlink" variant="secondary" to="/login">
                  Login
                </BaseLink>
                <BaseLink type="buttonlink" to="/signup">
                  Sign up
                </BaseLink>
              </>
            )}
          </div>
          <div className="mobileDropdownTrigger flex items-center lg:hidden">
            <button onClick={toggleMobileDropdown}>
              <Icon>{showMobileDropdown ? <Cross /> : <Burger />}</Icon>
            </button>
          </div>
        </div>
      </nav>
      <div className="container relative">
        <MobileDropdown
          className={`lg:hidden ${showMobileDropdown && 'translate-y-[0]'}`}
          onLinkClick={closeMobileDropdown}
        />
        <DesktopDropdown
          className={`hidden lg:flex ${showDesktopDropdown && 'translate-y-[0]'}`}
          onLinkClick={closeDesktopDropdown}
        />
      </div>
    </>
  )
}

export default Navigation
