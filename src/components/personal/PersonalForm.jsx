import { personalFormInfo } from '../../forms';
import { Form } from '../Form';
import { useCurriculumContext } from '../context/CurriculumContext';

export const PersonalForm = ({ onChange, values }) => {
  const { handleSubmitPersonalData } = useCurriculumContext();
  return (
    <form className='form' onSubmit={handleSubmitPersonalData}>
      {personalFormInfo.map((x) => (
        <Form key={x.id} form={x} onChange={onChange} value={values[x.name]} />
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
};
