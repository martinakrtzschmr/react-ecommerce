import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../components/Header';
import Container from '../components/ui/container';

export const Route = createRootRoute({
  component: () => (
    <main>
      <Header />

      <Container>
        <Outlet />
      </Container>
      <TanStackRouterDevtools />
    </main>
  ),
});
