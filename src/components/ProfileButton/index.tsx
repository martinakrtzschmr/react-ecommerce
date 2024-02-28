import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Link } from '@tanstack/react-router';

const ProfileButton = () => {
  return (
    <>
      <SignedIn>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src='/img/shadcn.jpg' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer'>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              Subscription
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              {/* @ts-ignore */}
              <Link to='/'>
                <SignOutButton />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
};

export default ProfileButton;
