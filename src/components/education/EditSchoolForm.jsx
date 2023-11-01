import { schoolFormInfo } from "../../forms";
import { EditForm } from "../EditForm";
import { useState } from "react";
import "../../styles/Form.css";
import { useCurriculumContext } from "../context/CurriculumContext";

export const EditSchoolForm = ({ onEdit, schoolData }) => {
  const [editData, setEditData] = useState(schoolData);
  const [isOpen, setIsOpen] = useState(false);

  const { handleEdit, handleEditChange } = useCurriculumContext();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button onClick={toggleAccordion} className="accordion-title">
        Modify {schoolData.school}
      </button>
      {isOpen && (
        <form className="form">
          {schoolFormInfo.map((x) => (
            <EditForm
              key={x.id}
              form={x}
              onChange={(e) => handleEditChange(e, setEditData, editData)}
              value={schoolData[x.name]}
            />
          ))}
          <button onClick={(e) => handleEdit(e, onEdit, editData)} className="edit-btn">
            Edit
          </button>
        </form>
      )}
    </div>
  );
};
