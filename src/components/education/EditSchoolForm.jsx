import { schoolFormInfo } from "../../forms";
import { EditForm } from "../EditForm";
import {useState} from "react"
import "../../styles/Form.css"

export const EditSchoolForm = ({ onEdit, schoolData }) => {
  const [editData, setEditData] = useState(schoolData);

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(editData); 
  };

  const handleEditChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditData({ ...editData, [name]: value });
  };
  return (
    <form className="form">
      {schoolFormInfo.map((x) => (
        <EditForm
          key={x.id}
          form={x}
          onChange={handleEditChange}
          value={schoolData[x.name]}
        />
      ))}
      <button onClick={(e) => handleEdit(e)}>Edit</button>
    </form>
  );
};
