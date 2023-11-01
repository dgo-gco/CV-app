import { schoolFormInfo } from "../../forms";
import { Form } from "../Form";
import "../../styles/Form.css"

export const SchoolForm = ({onChange, onSubmit, values}) => {

  return (
    <form onSubmit={onSubmit} className="form">
      {schoolFormInfo.map((x) => (
        <Form
          key={x.id}
          form={x}
          onChange={onChange}
          value={values[x.name]}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
