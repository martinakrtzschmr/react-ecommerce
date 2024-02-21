import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Link } from '@tanstack/react-router';

interface Route {
  href: string;
  label: string;
}

interface MobileSheetProps {
  routes: Route[];
}

const MobileSheet: React.FC<MobileSheetProps> = ({ routes }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className='h-6 w-6 md:hidden' />
      </SheetTrigger>
      <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
        <nav className='flex flex-col gap-4'>
          {routes.map((route, i) => {
            return (
              <Link key={i} to={route.href} className='block px-2 py-1 text-lg'>
                {route.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSheet;
