import { useState } from 'react'
import Input from '@/components/ui/Input'
import EyeStrike from '@/components/icons/EyeStrike'
import Eye from '@/components/icons/Eye'

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleIconClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <Input
      name="password"
      label="Password"
      type={showPassword ? 'text' : 'password'}
      icon={showPassword ? <EyeStrike /> : <Eye />}
      onIconClick={handleIconClick}
    />
  )
}

export default PasswordInput
