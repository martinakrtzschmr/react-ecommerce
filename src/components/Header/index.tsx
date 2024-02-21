import { Moon, ShoppingCart, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import Container from '../ui/container';
import { Link } from '@tanstack/react-router';
import ProfileButton from '../ProfileButton';

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/listing',
    label: 'Listing',
  },
];

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
          <div className='flex items-center'>
            <Link to='/' className='ml-4 lg:ml-0'>
              <h1 className='text-xl font-bold'>Store Name</h1>
            </Link>
          </div>

          <nav className='mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block'>
            {routes.map((route, i) => (
              <Button key={i} asChild variant='ghost'>
                <Link
                  to={route.href}
                  className='text-sm font-medium transition-colors'
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>

          <div className='flex items-center'>
            <Button
              variant='ghost'
              size='icon'
              className='mr-2'
              aria-label='Shopping Cart'
            >
              <ShoppingCart className='h-6 w-6' />
              <span className='sr-only'>Shopping Cart</span>
            </Button>

            <Button
              variant='ghost'
              size='icon'
              aria-label='Toggle Theme'
              className='mr-6'
            >
              <Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
