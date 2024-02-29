import { createFileRoute } from '@tanstack/react-router';
import Loading from '../components/Loading';
import { Separator } from '../components/ui/separator';
import ProductList from '../components/ProductList';
import { fetchDataFromJson, useListingData } from '../hooks/useListingData';
import { useQuery } from '@tanstack/react-query';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';

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

const initalState = {
  title: '',
  description: '',
  location: '',
}

function Listing() {
  const [searchParams, setSearchParams] = useState(initalState);

  const form = useForm({
    defaultValues: initalState,
    onSubmit: ({ value }) => {
      setSearchParams(value);
    },
  });

  const { data, isLoading } = useListingData(searchParams);

  return (
    <div className='space-y-10 pb-10'>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <div className='space-y-4'>
          <h3 className='font-bold text-xl sm:text-2xl lg:text-3xl dark:text-white text-black'>
            Featured Products
          </h3>
          <Separator />
        </div>
        <div className='space-y-4'>
          <div>
            <form.Provider>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  void form.handleSubmit();
                }}
              >
                <div>
                  <form.Field
                    name='title'
                    children={(field) => (
                      <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder='título'
                        className='p-2 rounded-sm text-black'
                      />
                    )}
                  />
                  <form.Field
                    name='description'
                    children={(field) => (
                      <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder='descrição'
                        className='p-2 rounded-sm text-black'
                      />
                    )}
                  />
                  <form.Field
                    name='location'
                    children={(field) => (
                      <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder='localização'
                        className='p-2 rounded-sm text-black'
                      />
                    )}
                  />
                </div>
                <button type='submit'>Submit</button>
              </form>
            </form.Provider>
          </div>
        </div>
        {isLoading && <Loading />}
        {data && !isLoading && <ProductList items={data} />}
      </div>
    </div>
  );
}
