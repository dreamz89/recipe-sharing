import Icon from '@/components/icons/Icon'
import { ReactElement } from 'react'

interface Props {
  name: string
  label: string
  type?: string
  placeholder?: string
  icon?: ReactElement
  onIconClick?: () => void
  error?: string
}

const Input = ({
  name,
  label,
  type = 'text',
  placeholder,
  icon,
  onIconClick,
  error,
}: Props) => {
  return (
    <div className="relative flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={`mb-6 h-10 w-full min-w-72 rounded-lg border p-2 ${error ? 'border-error focus:outline-error' : 'border-gray500'}`}
        />
        {icon && (
          <button onClick={onIconClick} className="absolute right-2 top-2">
            <Icon>{icon}</Icon>
          </button>
        )}
      </div>
      <p className="absolute bottom-2 text-sm leading-none text-error">
        {error}
      </p>
    </div>
  )
}

export default Input
