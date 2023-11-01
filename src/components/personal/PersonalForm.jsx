import { personalFormInfo } from '../../forms';
import { Form } from '../Form';

export const PersonalForm = ({ onChange, values }) => {
  return (
    <form className='form'>
      {personalFormInfo.map((x) => (
        <Form key={x.id} form={x} onChange={onChange} value={values[x.name]} />
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
};
