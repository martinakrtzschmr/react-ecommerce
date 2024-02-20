import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/listing')({
  component: () => <div>Hello /listing!</div>
})