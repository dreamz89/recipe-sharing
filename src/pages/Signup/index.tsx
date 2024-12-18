import CenteredCard from '@/components/CenteredCard'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import BaseLink from '@/components/ui/Link'

const Signup = () => {
  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <div className="radial-gradient flex min-h-[calc(100dvh-64px)] items-center justify-center">
      <CenteredCard>
        <h2 className="mb-8 text-center">Create account</h2>
        <Input name="username" label="Username" />
        <Input name="email" label="Email" type="email" />
        <Input name="password" label="Password" />
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="block w-full"
        >
          Signup
        </Button>
        <p className="mt-8 flex gap-x-2">
          Already have an account?
          <BaseLink type="textlink" to="/login">
            Login
          </BaseLink>
        </p>
      </CenteredCard>
    </div>
  )
}

export default Signup
