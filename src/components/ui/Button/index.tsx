import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  variant: 'primary' | 'secondary' | 'tertiary'
  type?: 'submit' | 'reset' | 'button'
  onClick: () => void
  className?: string
  children: ReactNode
}

const Button = ({
  variant,
  type = 'button',
  onClick,
  className,
  children,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(`btn-${variant}`, className)}
    >
      {children}
    </button>
  )
}

export default Button
