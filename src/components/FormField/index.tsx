
const FormField = ({form, name, placeholder}) => {
  return (
    <form.Field
      name={name}
      children={(field) => (
        <input
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          placeholder={placeholder}
          className='mx-2 my-2 p-2 rounded-sm text-black'
        />
      )}
    />
  );
};

export default FormField;