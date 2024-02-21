import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../components/Header';

export const Route = createRootRoute({
  component: () => (
    <main>
      <Header />

      {/* Hero component */}
      
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
