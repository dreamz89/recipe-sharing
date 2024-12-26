import { Outlet, useLocation } from 'react-router'

import NavTabs from '@/components/ui/NavTabs'

const tabs = [
  { label: 'Account', path: '/settings/account' },
  { label: 'Edit Profile', path: '/settings/edit-profile' },
]

const Settings = () => {
  const params = useLocation()
  const activeTabIndex = tabs.findIndex((tab) => tab.path === params.pathname)

  return (
    <div className="mx-auto mt-14 flex w-fit flex-row gap-x-8 lg:flex-col lg:gap-y-8">
      <NavTabs
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        className="lg:hidden"
        isVertical
      />
      <NavTabs
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        className="hidden lg:block"
      />
      <Outlet />
    </div>
  )
}

export default Settings
