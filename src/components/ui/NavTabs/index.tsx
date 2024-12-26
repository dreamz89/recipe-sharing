import { twMerge } from 'tailwind-merge'

import BaseLink from '@/components/ui/Link'

interface Tab {
  label: string
  path: string
}

interface Props {
  tabs: Tab[]
  activeTabIndex: number
  className?: string
  isVertical?: boolean
}

const NavTabs = ({
  tabs,
  activeTabIndex,
  className,
  isVertical = false,
}: Props) => {
  const verticalTranslations: string[] = []
  tabs.forEach((_, index) =>
    verticalTranslations.push(`translate-y-[${index * 32}px]`)
  )

  const horizontalTranslations: string[] = []
  tabs.forEach((_, index) =>
    horizontalTranslations.push(`translate-x-[${index * 96}px]`)
  )

  return (
    <div className={twMerge('relative', className)}>
      <div className={`flex ${isVertical ? 'ml-4 flex-col' : 'flex-row'}`}>
        {tabs.map((tab) => (
          <BaseLink
            key={tab.label}
            type="navlink"
            to={tab.path}
            className={`no-underline ${isVertical ? 'h-8 leading-8' : 'w-24 text-center'}`}
          >
            {tab.label}
          </BaseLink>
        ))}
      </div>
      <div
        className={`absolute bg-orange400 transition-transform ${isVertical ? `top-0 h-8 w-[1.5px] ${verticalTranslations[activeTabIndex]}` : `bottom-0 h-[1.5px] w-24 ${horizontalTranslations[activeTabIndex]}`} `}
      />
      {!isVertical && <hr className="mt-2 w-full border-gray300" />}
    </div>
  )
}

export default NavTabs
