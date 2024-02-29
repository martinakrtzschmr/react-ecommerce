import { createFileRoute } from '@tanstack/react-router';
import Loading from '../components/Loading';
import Error from '../components/Error';

export const Route = createFileRoute('/')({
  pendingComponent: Loading,
  errorComponent: Error,
  component: Index,
});

function Index() {
  return (
    <div className='space-y-10 pb-10'>
      <div className='p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden'>
        <div
          style={{ backgroundImage: `url(/images/hero-1920x1080.jpg)` }}
          className='rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
        >
          {/* <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
              <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rouded-lg'>
                Featured Products
                <Button size='lg' className='w-full py-6 text-xl'>
                  <ShoppingBag className='mr-2' /> Hello
                </Button>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}
