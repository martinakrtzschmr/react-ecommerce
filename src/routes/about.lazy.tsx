import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className='space-y-10 pb-10'>
      <h3>Hello from About!</h3>
    </div>
  );
}
