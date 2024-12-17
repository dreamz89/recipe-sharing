import CenteredCard from '@/components/CenteredCard'
import Icon from '@/components/icons/Icon'
import PageError from '@/components/icons/PageError'
import BaseLink from '@/components/ui/Link'

const NotFound = () => {
  return (
    <div className="flex min-h-[calc(100dvh-64px)] items-center justify-center bg-gray200">
      <CenteredCard className="flex flex-col items-center justify-center">
        <Icon width={80} height={72}>
          <PageError />
        </Icon>
        <h2 className="my-4">404</h2>
        <p className="mb-6 max-w-60 text-center">
          We were unable to find the page that you were looking for.
        </p>
        <BaseLink type="buttonlink" to="/recipes">
          Explore Recipes
        </BaseLink>
      </CenteredCard>
    </div>
  )
}

export default NotFound
