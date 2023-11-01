import { companyFormInfo } from "../../forms";
import { Form } from "../Form";
import "../../styles/Form.css"

export const CompanyForm = ({onChange, onSubmit, values}) => {

  return (
    <form onSubmit={onSubmit} className="form">
      {companyFormInfo.map((x) => (
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
