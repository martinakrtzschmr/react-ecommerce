import { createFileRoute } from '@tanstack/react-router';
import Loading from '../components/Loading';
import { Separator } from '../components/ui/separator';
import ProductList from '../components/ProductList';
import { fetchDataFromJson, useListingData } from '../hooks/useListingData';
import { useQuery } from '@tanstack/react-query';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import FormField from '../components/FormField';
import { Button } from '../components/ui/button';

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
};

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
                <div className='p-2'>
                  <FormField form={form} name='title' placeholder='Título' />
                  <FormField
                    form={form}
                    name='description'
                    placeholder='Descrição'
                  />
                  <FormField
                    form={form}
                    name='location'
                    placeholder='Localização'
                  />
                </div>
                <div className='p-3'>
                  <Button variant='outline' type='submit'>Pesquisar</Button>
                </div>
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
