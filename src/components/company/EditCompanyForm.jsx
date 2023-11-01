import { companyFormInfo } from "../../forms";
import { EditForm } from "../EditForm";
import "../../styles/Form.css"

export const EditCompanyForm = ({ onChange, onEdit, schoolData }) => {
    return (
        <form className="form">
          {companyFormInfo.map((x) => (
            <EditForm
              key={x.id}
              form={x}
              onChange={onChange}
              value={schoolData[x.name]}
            />
          ))}
          <button onClick={onEdit}>Edit</button>
        </form>
      );
}
