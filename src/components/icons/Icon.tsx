import { ReactNode } from 'react'

interface Props {
  width?: number
  height?: number
  fill?: string
  children: ReactNode
}

const Icon = ({ width = 24, height = 24, fill, children }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? 'currentColor'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default Icon
