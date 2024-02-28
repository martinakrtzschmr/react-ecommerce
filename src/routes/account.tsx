import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/account')({
  component: Account,
});

function Account() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        {/* @ts-ignore */}
        <SignOutButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}
