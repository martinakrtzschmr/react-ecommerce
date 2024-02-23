import { createFileRoute } from '@tanstack/react-router';
import Loading from '../components/Loading';

export const Route = createFileRoute('/listing')({
  // Create File Route Props and use cases:
  // Validate Search for data validation, Zod or Yup can be inserted on this step
  // validateSearch: (params: <Record, unknown>): {page:number} => {
  //   return {
  //     page: 1
  //   }
  // },
  // Data at loading time, before rendering:
  // loaderDeps: ({ search }) => ({ search }),
  // loader: async ({ deps: { search } }) =>
  //   new Promise((resolve) => setTimeout(resolve, 1000)),
  pendingComponent: Loading,
  component: Listing,
});

function Listing() {
  return (
    <div className='p-2'>
      <h3>Hello from Listing!</h3>
    </div>
  );
}
