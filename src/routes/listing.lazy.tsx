import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/listing')({
  component: Listing,
})

function Listing() {
  return (
    <div className='p-2'>
      <h3>Hello from Listing!</h3>
    </div>
  );
}