import '../styles/Form.css';
export const EditForm = ({ form, onChange, value }) => {
  return (
    <div className='formedit'>
      <input
        type={form.type}
        name={form.name}
        id={form.id}
        placeholder={form.placeholder}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
};
