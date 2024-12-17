import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
  children: ReactNode
}

const CenteredCard = ({ className, children }: Props) => {
  return (
    <div
      className={twMerge(
        'h-[calc(100dvh-64px)] w-full bg-white p-8 sm:h-auto sm:w-auto sm:rounded-2xl',
        className
      )}
    >
      {children}
    </div>
  )
}

export default CenteredCard
