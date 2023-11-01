
export const Form = ({ form, onChange, value }) => {
  return (
    <>
      <input
        type={form.type}
        name={form.name}
        id={form.id}
        placeholder={form.placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
