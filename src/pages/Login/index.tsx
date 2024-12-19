import CenteredCard from '@/components/CenteredCard'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import BaseLink from '@/components/ui/Link'
import PasswordInput from '@/components/ui/PasswordInput'

const Login = () => {
  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <div className="radial-gradient flex min-h-[calc(100dvh-64px)] items-center justify-center">
      <CenteredCard>
        <h2 className="mb-8 text-center">Welcome Back</h2>
        <Input name="email" label="Email" type="email" />
        <PasswordInput />
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="block w-full"
        >
          Login
        </Button>
        <p className="mt-8 flex gap-x-2">
          Don’t have an account yet?
          <BaseLink type="textlink" to="/signup">
            Signup
          </BaseLink>
        </p>
      </CenteredCard>
    </div>
  )
}

export default Login
