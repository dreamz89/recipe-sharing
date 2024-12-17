import { ReactNode } from 'react'

interface Props {
  fill?: string
  children: ReactNode
}

const Icon = ({ children, fill }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill ?? 'currentColor'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default Icon
