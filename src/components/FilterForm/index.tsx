import { useForm } from '@tanstack/react-form';

const FilterForm = () => {
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
    onSubmit: ({ value }) => {
      
    },
  });

  return (
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
          </div>
          <button type='submit'>Submit</button>
        </form>
      </form.Provider>
    </div>
  );
};

export default FilterForm;
